<template>
  <div class="cart">
    <cart-nav-bar/>
    <scroll class="cart-scroll" ref="scroll" :probeType="0" :pullUpLoad="true">
      <cart-list-item v-for="item in cartList" :cart-item="item"/>
    </scroll>
    <Cartbottom class="cart-bottom"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll";
import CartNavBar from "./cartComps/CartNavBar";
import CartListItem from "./cartComps/CartListItem";
import Cartbottom from "./cartComps/Cartbottom";
export default {
  name: "Cart",
  components:{
    Scroll,
    CartNavBar,
    CartListItem,
    Cartbottom
  },
  computed:{
    ...mapGetters(['cartList'])
  },

}
</script>

<style scoped>
.cart{
  height:100vh;
}
.cart-scroll{
  height:calc(100% - 139px);
  overflow:hidden;
}
.cart-bottom{
  position: relative;
  bottom:0px;
}
</style>