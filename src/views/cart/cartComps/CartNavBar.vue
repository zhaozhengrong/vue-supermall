<template>
  <nav-bar class="cart-navbar">
    <div slot="center">myCart</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
name: "CartNavBar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .cart-navbar{
    background-color:var(--color-tint);
  }
</style>