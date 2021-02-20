export default {
  addCount(state,payload){
    payload.count += 1
  },
  addCart(state,payLoad){
    payLoad.count = 1
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}