<template>
  <div class="bottom">
    <div class="left">
      <div >
        <check-button :checked="isSellAll" @click.native="buttonClick"/>
      </div>
      <div>全选</div>
    </div>
    <div class="center">合计  {{money}}</div>
    <div class="right">去计算:{{count}}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import {mapGetters} from 'vuex'
export default {
name: "Cartbottom",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    isSellAll(){
     return !this.cartList.find(item => item.checked == false)
     //  return !(this.cartList.filter(item => item.checked == false).length)
    },
    money(){
      return '¥'+ this.cartList.filter(item => item.checked)
              .reduce((prevalue,item) => {
                  return prevalue += item.price * item.count
              },0)
    },
    count(){
      return this.cartList.filter(item => item.checked).length
    }
  },
  methods:{
    buttonClick(){
      if(this.isSellAll){
        for(let item of this.cartList){
          item.checked = !item.checked
        }
      }else{
        for(let item of this.cartList){
          item.checked = !item.checked
        }
      }
    }
  }
}
</script>

<style scoped>
  .bottom{
    height:46px;
    width: 100%;
    display: flex;
    background-color:rgba(238,238,238);
  }
  .left{
    width:25%;
    height: 100%;
    display: flex;
  }
  .left div:nth-child(1){
    width:50px;
    height: 100%;
  }
  .left div:nth-child(2){
    line-height:46px;
    text-align: left;
    padding-top:1px;
    padding-left:-10px;
    flex: 1;
  }
  .center{
    flex: 1;
    line-height:46px;
    text-align: left;
    padding-left:20px;
  }
  .right{
    width:30%;
    height: 100%;
    background-color:rgba(251,24,29,0.99);
    text-align: center;
    line-height:46px;
    padding-left:10px;
    color:#fff;
  }
</style>