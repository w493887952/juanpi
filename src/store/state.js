const userInfo = JSON.parse(window.localStorage.getItem('user-info')) || ''
const user = {
  isLogin: userInfo.isLogin ? userInfo.isLogin : false,
  username: userInfo.username ? userInfo.username : '',
  token: userInfo.token ? userInfo.token : ''
}
export default {
  haveTabbar: true,
  cartList: JSON.parse(window.localStorage.getItem('cart-lists')) || [],
  searchLists: JSON.parse(window.localStorage.getItem('search-lists')) || [],
  user
}
