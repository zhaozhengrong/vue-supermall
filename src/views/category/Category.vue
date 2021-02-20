<template>
  <div class="cate-gory">
    <nav-bar class="category-navbar"><div slot="center">分类</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components:{
    NavBar
  }
}
</script>

<style scoped>
.category-navbar{
  background-color:var(--color-tint);
}
</style>