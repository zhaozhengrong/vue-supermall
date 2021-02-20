<template>
  <div class="tab-control">
    <div v-for="(item,index) in list" :class="{activefont:currentIndex == index}">
      <span @click="itemClick(index)" :class="{active:currentIndex == index}">{{item}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    line-height:39px;
    background-color:#ffffff;
    border-bottom:1px solid #ccc;
  }
  .tab-control div{

    flex: 1;
  }

  .active{
    border-bottom:2px solid var(--color-high-text);
    padding:0 3px;
    padding-bottom:2px;
  }
  .activefont{
    color:var(--color-high-text);
  }
</style>