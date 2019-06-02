export default {
  totalCount (state) {
    if (state.user.isLogin === false) {
      return 0
    } else {
      return state.cartList.reduce((result, list) => {
        result += list.count
        return result
      }, 0)
    }
  },
  totalPrice (state) {
    return state.cartList.reduce((result, list) => {
      if (list.isChecked) {
        result += list.count * list.price
      }
      return result
    }, 0)
  },
  totalCheckCount (state) {
    return state.cartList.reduce((result, list) => {
      if (list.isChecked) {
        result += list.count
      }
      return result
    }, 0)
  },
  changeAllState (state) {
    if (state.cartList.length === 0) {
      return false
    } else {
      return state.cartList.every(list => list.isChecked === true)
    }
  }
}
