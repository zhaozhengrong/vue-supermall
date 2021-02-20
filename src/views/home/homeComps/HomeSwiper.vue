<template>
  <swiper>
    <swiper-item v-for="item in multidata">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: "HomeSwiper",
  data(){
    return {
      num:0
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    multidata:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(this.num == 0){
        this.$emit('imageLoad')
        this.num ++;
      }
    }
  },
}
</script>

<style scoped>

</style>