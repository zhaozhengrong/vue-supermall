<template>
  <div class="navbar">
   <div class="right"><slot name="left"></slot></div>
   <div class="center"><slot name="center"></slot></div>
   <div class="left"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .navbar{
    display: flex;
    text-align: center;
    height: 44px;
    line-height:44px;
    color:#f6f6f6;
  }
 .left,.right{
   width: 60px;
 }
 .center{
   flex: 1;
 }
</style>