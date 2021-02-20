<template>
  <div>
    <goods-list :goods="goods "></goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "HomeGoodsList",
  components:{
    GoodsList,
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>