<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type:Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType : this.probeType,
      pullUpLoad : this.pullUpLoad
    })
    // 当页面发生滚动的时候，doing what thing
    this.scroll.on('scroll',(pos) =>{
      this.$emit('scrollPos',pos)
    }),
    this.scroll.on('pullingUp',() =>{
      this.$emit('loadMore')

    })
  },
  methods:{
    // 对betterScroll进行刷新
    refresh(){
      this.scroll.refresh()
    },
    // 结束上拉加载行为
    finishPullUp(){
      setTimeout(()=>{
        this.scroll.finishPullUp()
      },1000)
    },
    // 滚动到某一个位置
    scrollTo(x,y,timer){
      this.scroll.scrollTo(x,y,timer)
    }
  },

}
</script>

<style scoped>

</style>