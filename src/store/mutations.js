import { Toast, MessageBox } from 'mint-ui'

export default{
  showTabbar (state) {
    state.haveTabbar = true
  },
  hideTabbar (state) {
    state.haveTabbar = false
  },

  addCart (state, proInfo) {
    const isInCartList = state.cartList.some(item => {
      return item.id === proInfo.id
    })
    if (isInCartList) {
      const newAddList = state.cartList.map(item => {
        if (item.id === proInfo.id) {
          item.count = item.count + 1
        }
        return item
      })
      window.localStorage.setItem('cart-lists', JSON.stringify(newAddList))
      Toast('添加成功！')
    } else {
      state.cartList.push(proInfo)
      window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
      Toast('添加成功！')
    }
  },
  // 改变按钮状态
  changeState (state, arrId) {
    state.cartList = state.cartList.map(list => {
      if (list.id === arrId) {
        list.isChecked = !list.isChecked
      }
      return list
    })
    window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
  },
  // 改变全选状态
  checkAll (state, e) {
    state.isAllCheck = e.target.checked
    state.cartList = state.cartList.map(list => {
      list.isChecked = e.target.checked
      return list
    })
    window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
  },
  // 数量减少
  reduceCount (state, id) {
    state.cartList = state.cartList.map(list => {
      if (list.id === id) {
        if (list.count === 1) {
          Toast('数量不能再减少了！')
          list.count = 2
        }
        list.count--
      }
      return list
    })
    window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
  },
  // 数量增加
  addCount (state, id) {
    state.cartList = state.cartList.map(list => {
      if (list.id === id) {
        list.count++
      }
      return list
    })
    window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
  },
  // 购物车删除
  deleteList (state, id) {
    state.cartList = state.cartList.filter(list => list.id !== id)
    window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
    Toast({
      message: '删除成功',
      duration: 1000
    })
  },
  // 购物车结算
  toSettlement (state) {
    const newList = state.cartList.filter(list => list.isChecked === true)
    if (newList.length === 0) {
      Toast({
        message: '请选择要购买的商品',
        duration: 1000
      })
    } else {
      Toast({
        message: '假的哦，不能支付！',
        duration: 2000
      })
    }
  },
  // 购物车删除
  deleteCart (state) {
    const newList = state.cartList.filter(list => list.isChecked === true)
    if (newList.length === 0) {
      Toast({
        message: '请选择要删除的商品',
        duration: 1000
      })
    } else {
      MessageBox.confirm('确定删除选中商品吗?').then(action => {
        state.cartList = state.cartList.filter(list => list.isChecked === false)
        window.localStorage.setItem('cart-lists', JSON.stringify(state.cartList))
        Toast({
          message: '删除成功',
          duration: 2000
        })
      }).catch(() => {
      })
    }
  },


  // 登录/注册成功
  loginSuccess (state, user) {
    state.user = user
  },
  // 退出
  logout (state) {
    state.user.isLogin = false
    window.localStorage.removeItem('user-info')
  }
}
