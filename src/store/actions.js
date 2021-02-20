export  default {
  addToCart(context,payLoad){
    let oldProduct = null
    for(let item of context.state.cartList){
      if(item.iid === payLoad.iid){
        oldProduct = item;
      }
    }
    // 有商品 当前商品的count++ else 添加到购物车
    if(oldProduct){
      context.commit("addCount",oldProduct)
    }else {
      context.commit('addCart',payLoad)

    }
  }
}