<template>
  <div content="detail-item" v-show="isShow">
    <div class="desc">{{detailInfo.title}}</div>
    <div class="price">
      <span>¥{{detailInfo.highNowPrice}}</span>
      <span>{{detailInfo.highPrice}}</span>
      <span>{{detailInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="item in detailInfo.columns">{{item}}</span>
    </div>
    <div class="detail-service" v-show="isShow">
      <span class="detail-service-item" v-for="(item,index) in detailInfo.services" :key="index">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    // 根据detailInfo是否有值来判断当前组件是否显示
    isShow(){
      return this.detailInfo && Object.keys(this.detailInfo).length != 0
    }
  }
}
</script>

<style scoped>
.desc{
  margin:8px;
  font-size:19px;
  color:#000000;
  font-weight:550;
}

.price{
  margin:8px;
  position: relative;
}
.price span:nth-child(1){
  font-size:24px;
  color:var(--color-high-text);
}
.price span:nth-child(2){
  font-size:14px;
  text-decoration:line-through;
  color:#808080;
  margin-left:3px;
}
.price span:nth-child(3){
  position: absolute;
  background-color:var(--color-high-text);
  color:#ffffff;
  width:66px;
  line-height:16px;
  text-align: center;
  border-radius:50px;
  font-size:13px;
  margin-left:6px;
}
.columns{
  display: flex;
  margin-bottom:3px;
}

.columns span{
  flex:1;
  font-size:14px;
  color:#808080;
}

.columns span:nth-child(1){
  padding-left:6px;
}
.columns span:nth-child(2){
  text-align: center;
}
.columns span:nth-child(3){
  text-align: right;
  padding-right:6px;
}
.detail-service {

  display: flex;
  justify-content: space-between;
  line-height: 60px;
  border-top: 1px solid #ccc;
  border-bottom: 5px solid #f2f5f8;
}
.detail-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.detail-service-item span {
  font-size: 13px;
  color: #333;
}
</style>