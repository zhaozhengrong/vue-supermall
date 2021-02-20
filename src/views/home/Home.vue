<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">supermall</div></nav-bar>
    <tab-control :list="['流行','新款','精选']" @tabClick="tabClick" class="tab-controlhead" v-show="isShowTabControl" ref="tabcontrol1" />
    <scroll class="wrapper" ref="scroll" :probeType="3" :pullUpLoad="true" @loadMore="loadMore" @scrollPos="scrollPos">
      <home-swiper :multidata="multidata" @imageLoad="imageLoad" />
      <recommends :recommends="recommends"/>
      <prevalent/>
      <tab-control :list="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol"/>
      <home-goods-list :goods="currentList" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabcontrol/TabControl";
import BackTop from "components/content/backTop/BackTop";

import HomeGoodsList from "./homeComps/HomeGoodsList";

import {debounce} from "common/utils";

import {getHomeMultidata,getHomeGoods} from "network/home";
import HomeSwiper from "./homeComps/HomeSwiper";
import Recommends from "./homeComps/Recommends";
import Prevalent from "./homeComps/Prevalent";
export default {
  name: "Home.vue",
  components:{
    NavBar,
    Scroll,
    TabControl,
    BackTop,
    HomeGoodsList,
    HomeSwiper,
    Recommends,
    Prevalent,
  },
  data(){
    return {
      multidata:[],
      recommends:[],
      goods:{
        'pop':{'page':0,'list':[]},
        'new':{'page':0,'list':[]},
        'sell':{'page':0,'list':[]},
      },
      checkIndex:'pop',
      positonY:0,
      tabControloffTop:0,
      homeLeaveY:0,
    }
  },
  computed:{
    // 返回当前选中的列表数据
    currentList(){
      return this.goods[this.checkIndex].list
    },
    // backtop是否显示
    isShow(){
      return this.positonY > 1600
    },
    // 是否显示 tabcontrol
    isShowTabControl(){
      return this.tabControloffTop && this.positonY >= this.tabControloffTop
    }
  },
  created() {
    // 请求首页轮播图数据和推荐数据
    getHomeMultidata().then(res =>{
      this.multidata = res.data.data.banner.list.reverse()
      this.recommends = res.data.data.recommend.list
    })
    // 当组件创建的时候 请求商品列表数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    /*监听goods里面的图片加载刷新, 刷新scrol.refresh
    获取tabcontrol的高度 monuted获取到的高度是item里面的图片未加载完成的高度,所以要在item的图片加完成之后获取*/
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('homeItemImageLoad',() =>{
      refresh()
      this.tabControloffTop = this.$refs.tabcontrol.$el.offsetTop - 39
    })
  },
  methods:{
    // 轮播图数据加载完成后，将页面进行刷新
    imageLoad(){
      this.$refs.scroll.refresh()
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.checkIndex)
      this.$refs.scroll.finishPullUp()
    },
    // 点击返回顶部
    backTop(){
      this.$refs.scroll.scrollTo(0,0,0)
    },
    // 获取scroll的position
    scrollPos(pos){
      this.positonY = -pos.y
    },
    // 获取首页推荐数据
    getHomeGoods(type){
      const page = this.goods[type].page += 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
      })
    },
    // 根据tabContrl的点击判断当前哪一个被选中
    tabClick(index){
      switch (index) {
        case 0:
          this.checkIndex = 'pop';
          break;
        case 1:
          this.checkIndex = 'new';
          break;
        case 2:
          this.checkIndex = 'sell';
          break;
      }
      this.$refs.tabcontrol.currentIndex = index
      this.$refs.tabcontrol1.currentIndex = index
    }
  },
  // 触发时机:keep-alive组件激活时调用
  activated() {
    this.$refs.scroll.scrollTo(0,this.homeLeaveY,0)
  },
  // // 触发时机：keep-alive组件停用时调用
  deactivated() {
    this.homeLeaveY = -this.positonY
  },

}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav-bar{
    background-color:var(--color-tint);
  }
  .tab-controlhead{
    position:absolute;
    top: 43px;
    left: 0;
    right: 0;
    z-index:9;
  }
.wrapper{
  height:calc(100% - 93px);
  overflow: hidden;
}
</style>