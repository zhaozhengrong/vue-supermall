<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="isHighLight"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {

    }
  },
  props:{
    path:{
      type:String,
      default(){
        return ''
      }
    }
  },
  methods:{
    itemClick(){
      // 路由传参
      this.$router.push(this.path).catch(()=>{})
    }
  },
  computed:{
    isActive(){
      // 判断当前跳转到的路由对象是否包含传入的路径
      return this.$route.fullPath.includes(this.path)
    },
    isHighLight(){
      // 判断isActive的值
      return this.isActive ? {active:true}:{}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    height: 49px;
    flex:1;
    text-align: center;
    font-size:15px;
    font-weight:400;
  }
  .tab-bar-item img{
    margin-top:4px;
    height: 26px;
    width: 26px;
  }
  .active{
    color:var(--color-high-text);
  }
</style>