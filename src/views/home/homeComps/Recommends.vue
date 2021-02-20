<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommends",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommends{
    display: flex;
    /*background-color:pink;*/
    border-bottom:7px solid rgba(238,238,238);
  }
  .recommends-item{
    margin:10px 0;
    flex: 1;
    text-align: center;
  }
  .recommends-item div{
    margin-top:3px;
    color:#000;
  }
  .recommends-item img{
    height: 66px;
    width: 66px;
  }
</style>