<template>
  <div class="profile">
    <nav-bar class="profile-navbar"><div slot="center">个人信息</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
name: "Profile",
  components:{
  NavBar
  }
}
</script>

<style scoped>
  .profile-navbar{
    background-color:var(--color-tint);
  }
</style>