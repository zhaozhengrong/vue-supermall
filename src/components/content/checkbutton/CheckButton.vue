<template>
  <div class="select">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{active:checked}">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    checked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.select{
  width: 100%;
  height: 100%;
  position:relative;
}
.select img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius:50px;
  border:2px solid #ccc;
}
.active{
  background-color:#f10125;
  border:2px solid rgba(251,95,65,0.99);
}
</style>