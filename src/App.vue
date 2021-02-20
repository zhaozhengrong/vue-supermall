<template>
  <div id="app">
    <keep-alive exclude="Detail,Cart">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {
    this.$router.push('/home')
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
