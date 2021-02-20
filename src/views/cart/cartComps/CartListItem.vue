<template>
  <div class="cart-item">
    <div class="item-select">
      <check-button :checked="cartItem.checked" @click.native="buttonClick"/>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="">
    </div>
    <div class="title">
      <div>{{title}}...</div>
      <div>{{desc}}...</div>
      <div>
        <span class="left">¥{{cartItem.price}}</span>
        <span class="right">x{{cartItem.count}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
export default {
  name: "CartListItem",
  components:{
    CheckButton
  },
  props:{
    cartItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    buttonClick(){
      this.cartItem.checked = !this.cartItem.checked
    }
  },
  computed:{
    title(){
      return this.cartItem.title.slice(0,11)
    },
    desc(){
      return this.cartItem.desc.slice(0,11)
    }
  }
}
</script>

<style scoped>
.cart-item{
  display: flex;
  padding:6px;
  height: 120px;
  border-bottom:1px solid #ccc;
  margin-bottom:2px;
}
.item-select{
  width:26px;
}
.item-img{
  width:80px;
  margin:0 6px;
}
.item-img img{
  padding:3px;
  border-radius:8px;
  width: 100%;
  height: 100%;
}
.title{
  flex: 1;
  position: relative;
  text-align:left;
  /*padding-left:10px;*/
  letter-spacing:1px;
  color:#000000;
}
.title div:nth-child(1){
  font-size:17px;
  line-height:30px;
}
.title div:nth-child(2){
  line-height:30px;
}
.title div:nth-child(3){
  height:40%;
  position: relative;
}
.left,.right{
  position:absolute;
  bottom:0;
}
.left{
  left: 0;
  color:rgba(251,99,84,0.99);
}
.right{
  right:18px;
  color:#000000;
}
</style>