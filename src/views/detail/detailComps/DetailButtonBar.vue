<template>
  <div class="button-bar">
    <div class="left">
      <div >
        <div class="icon"></div>
        <span>客服</span>
      </div>
      <div>
        <div></div>
        <span>店铺</span>
      </div>
      <div>
        <div></div>
        <span>收藏</span>
      </div>

    </div>
    <div class="right">
      <div @click="append">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  methods:{
    append(){
      this.$emit('append')
    }
  }
}
</script>

<style scoped>
  .button-bar{
    height: 49px;
    width: 100%;
    background-color:pink;
    position: absolute;
    bottom:0px;
    left: 0;
    right: 0;
    z-index:9999;
    display: flex;
  }
  .left{
    flex: 1;
    display: flex;
    text-align: center;
    background-color:rgba(243,248,251,0.99);
  }
  .left div{
    flex:1;
    margin-bottom:-4px;
  }
  .left div:nth-child(1) div{
    margin-top:-6px;
    margin-left:5px;
    height:40px;
    width:100%;
    background:url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-position: 0 -108px;
    transform: scale(0.5)
  }
  .left div:nth-child(2) div{
    margin-top:-6px;
    margin-left:5px;
    height:40px;
    width:100%;
    background:url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-position: 0 -198px;
    transform: scale(0.5)
  }
  .left div:nth-child(3) div{
    margin-top:-6px;
    margin-left:5px;
    height:40px;
    width:100%;
    background:url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-position: 0 -54px;
    transform: scale(0.5)
  }

  .right{
    width: 50%;
    line-height:49px;
    background-color:paleturquoise;
    display: flex;
    text-align: center;
  }
  .right div:nth-child(1){
    flex: 1;
    background-color:rgba(250,228,23);
    color: #333333;
  }
  .right div:nth-child(2){
    width:40%;
    background-color:rgba(250,100,152);
    color:#fff;
  }
</style>