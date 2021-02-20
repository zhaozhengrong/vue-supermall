<template>
  <div class="images-info">
    <div>{{imagesInfo.key}}－O－</div>
    <img :src="item" alt="" v-for="item in imagesInfo.list" @load="imageLoad">
  </div>
</template>

<script>
export default {
  name: "DetailImagesInfo",
  data(){
    return {
      count: 0,
      imagesLength: 0
    }
  },
  props:{
    imagesInfo:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    imageLoad(){
      if (++this.count === this.imagesLength) {
        this.$emit("imagesLoad");
      }
    }
  },
  watch:{
    imageInfo(){
      this.imagesLength = this.imagesInfo.list.length
    }
  }
}
</script>

<style scoped>
.images-info div{
  height: 18px;
  width: 80%;
  margin:12px;
  font-size:18px;
  color:#8a8c8e;
}
  .images-info img{
    width:100%;
  }
</style>