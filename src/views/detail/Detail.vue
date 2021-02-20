<template>
  <div class="detail">
    <detail-nav-bar @navBarClick="navBarClick" ref="navBar"/>
    <scroll :probeType="2" :pullUpLoad="true" class="content" ref="scroll" @scrollPos="scrollPos">
      <detail-swiper :top-images="topImages" class="detail-swiper" ref="swiper"/>
      <detail-base-info :detail-info="detailInfo"/>
      <detail-shop-info :shop="shop" @detailLogoLoad="imageLoad"/>
      <detail-images-info :images-info="detailImage" @imagesLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <comment-info :comment-info="commentInfo" ref="comment"/>
      <detail-goods-list :recommends="recommends" ref="goodsList"/>
    </scroll>
    <back-top v-show="isShow" @click.native="backTop"/>
    <detail-button-bar @append="addCart"/>
  </div>
</template>

<script>
import {getDetail,DetailInfo,Shop,GoodsParam,getRecommend} from "network/detail";
import {debounce} from "common/utils";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import DetailSwiper from "./detailComps/DetailSwiper";
import DetailNavBar from "./detailComps/DetailNavBar";
import DetailBaseInfo from "./detailComps/DetailBaseInfo";
import DetailShopInfo from "./detailComps/DetailShopInfo";
import DetailImagesInfo from "./detailComps/DetailImagesInfo";
import DetailParamInfo from "./detailComps/DetailParamInfo";
import CommentInfo from "./detailComps/CommentInfo";
import DetailGoodsList from "./detailComps/DetailGoodsList";
import DetailButtonBar from "./detailComps/DetailButtonBar";

export default {
  name: "Detail",
  components:{
    Scroll,
    BackTop,
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamInfo,
    CommentInfo,
    DetailGoodsList,
    DetailButtonBar
  },
  data(){
    return {
      iid:'',
      topImages:[],
      detailInfo:{},
      shop:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      offsetTop:[],
      scrollY:0,
      detailImage:{},
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const result = res.data.result
      // console.log(result)
      // 获取顶部轮播图数据
      this.topImages = result.itemInfo.topImages
      // 获取DetailBaseInfo数据
      this.detailInfo = new DetailInfo(result.detailInfo,result.itemInfo,result.columns,result.shopInfo)
      // 获取店铺信息
      this.shop = new Shop(result.shopInfo)
      // 获取店铺图片信息
      this.detailImage = result.detailInfo.detailImage[0]
      // 获取商品参数信息
      this.paramInfo = new GoodsParam(result.itemParams.info,result.itemParams.rule)
      // 获取评论信息
      if(result.rate.cRate !== 0){
        this.commentInfo = result.rate.list[0]
      }
      // 获取推荐数据
      getRecommend().then(res =>{
        this.recommends = res.data.data.list
      })
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    },
    // 对betterScroll进行刷新的时候，同时获取需要距离顶部的距离
    refresh() {
      this.$refs.scroll.refresh()
      this.offsetTop.push(this.$refs.swiper.$el.offsetTop - 49)
      this.offsetTop.push(this.$refs.param.$el.offsetTop - 49)
      this.offsetTop.push(this.$refs.comment.$el.offsetTop - 49)
      this.offsetTop.push(this.$refs.goodsList.$el.offsetTop - 49)
    },
    // 根据navbar 的点击 从而scroll到相应的位置
    navBarClick(index){
      this.$refs.scroll.scrollTo(0,-this.offsetTop[index],200)
    },
    // 接收scrolly滚动的位置
    scrollPos(pos) {
      this.scrollY = -pos.y
      const len = this.offsetTop.length
      for(let i = 0;i <= len;i++){
        // if(this.scrollY >= this.offsetTop[i] && this.scrollY < this.offsetTop[i+1]){
        //   this.$refs.navBar.currentIndex = i
        // }
        if((i < len - 1 && this.scrollY >= this.offsetTop[i] && this.scrollY < this.offsetTop[i+1])){
          return this.$refs.navBar.currentIndex = i
        }
        if(i > len-1){
          return this.$refs.navBar.currentIndex = 3
        }
      }
    },
    // 点击返回顶部
    backTop(){
      this.$refs.scroll.scrollTo(0,0,0)
    },
    addCart(){
      const cartItem = {}
      cartItem.image = this.topImages[0]
      cartItem.iid = this.iid
      cartItem.title = this.detailInfo.title
      cartItem.desc = this.detailInfo.desc
      cartItem.price = this.detailInfo.highNowPrice
      this.$store.dispatch('addToCart',cartItem)
    }
  },
  mounted() {
    // 推荐数据加载完成之后 将betterScroll 进行刷新
    // debounce 防抖！！?😁😁
    const refresh = debounce(this.refresh,0)

    this.$bus.$on('detailItemImageLoad',() => {
      refresh()
    })
  },
  computed:{
    // 根据scrolly 判断backTop是否显示
    isShow(){
      return this.scrollY > 800
    }
  },
  destroyed() {
  }
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position:relative;
    left: 0;
    right: 0;
    z-index:999;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }
  .content{
    /*position: absolute;*/
    /*top: 45.6px;*/
    /*bottom: 0px;*/
    /*left: 0;*/
    /*right: 0;*/
    /*overflow: hidden;*/
    height:calc(100% - 45.6px);
    overflow: hidden;
  }
  .detail-swiper{
    height:260px;
  }
</style>