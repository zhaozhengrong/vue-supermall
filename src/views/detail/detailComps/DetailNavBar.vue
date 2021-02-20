<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="nav-left" @click="backTop">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-center">
        <div v-for="(item,index) in titles" @click="navBarClick(index)" :class="{active:index == currentIndex}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    backTop(){
      this.$router.back()
    },
    navBarClick(index){
      this.$emit('navBarClick',index)
      this.currentIndex = index
    }
  },

}
</script>

<style scoped>
.detail-nav-bar{
  background-color:#fff;
  border-bottom:1px solid #ccc;
}
  .nav-left{
    position: relative;
  }
  .nav-left img{
    height: 23px;
    width: 23px;
    display: block;
    margin:18% auto;
  }
  .nav-center{
    display: flex;
    font-size:16px;
    color: #333333;
  }
  .nav-center div{
    flex: 1;
  }
  .active{
    color:var(--color-high-text);
  }
</style>