<template>
    <goods-list :goods="recommends"></goods-list>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "DetailGoodsList",
  components:{
    GoodsList
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style scoped>

</style>