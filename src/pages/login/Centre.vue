<template>
    <div class="login">
      <template>
        <div class="page-navbar">
          <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">账号登录</mt-tab-item>
            <mt-tab-item id="2">手机快捷登录</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <div class="input">
                <input type="text" placeholder="手机号/邮箱/用户名" v-model="username">
                <input type="password" placeholder="密码" v-model="password">
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div class="mobile">
                <input type="number" placeholder="请输入您的手机号码">
                <input type="text" placeholder="请输入验证码 " class="code">
                <span @click="sendCode">获取验证码</span>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </template>
      <div class="button" @click="login"> 登录</div>
    
    <div class="other-action">
           <p><input type="checkbox" name="vehicle" value="Bike"> 两周内免登录</p>
           <span forget>忘记密码？</span>
    </div>

    </div>
  </template>
  
  <script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    name: 'login',
    data () {
      return {
        selected: '1',
        username: '',
        password: ''
      }
    },
    watch: {
      user (val) {
        if (val.isLogin === true) {
          const { redirect = '/user' } = this.$route.params
          this.$router.push(redirect)
        }
      }
    },
    methods: {
      sendCode () {
        Toast({
          message: '无法发送',
          duration: 1000
        })
      },
      login () {
        const {
          username,
          password
        } = this
        // const isCorrect = password.matches('^(?:(?=.*[0-9].*)(?=.*[A-Za-z].*)(?=.*[\\W].*))[\\W0-9A-Za-z]{8,16}$')
        if (!username || !password) {
          Toast({
            message: '请输入用户名和密码',
            duration: 1000
          })
          return
        } else if (password !== '') {
          var reg = /^[A-Za-z0-9]{6,16}$/
          if (!reg.test(password)) {
            Toast({
              message: '密码必须由数字和字母组成，必须为6~16位',
              duration: 2000
            })
            return
          }
        } else {
          return
        }
        this.$http.post('http://rap2api.taobao.org/app/mock/87295/api/jp/user', {
          username,
          password
        })
          .then((resp) => {
            if (resp.data.code === 200 && resp.data.errorMsg === 'OK') {
              /* console.log(this.$route)
              this.$router.push(this.$route.params) */
              const user = {
                username: resp.data.data.username,
                token: resp.data.data.token,
                isLogin: true
              }
              this.loginSuccess(user)
              window.localStorage.setItem('user-info', JSON.stringify(user))
            }
          })
      },
      ...mapMutations(['hideTabbar', 'loginSuccess', 'getUserinfo'])
    },
    mounted () {
      this.hideTabbar()
    },
    computed: {
      ...mapState(['user'])
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .login{
    .input{
      height: 110px;
      input{
        width: 100%;
        border: 1px solid #ccc;
        height: 40px;
        border-radius: 5px;
        margin-top: 10px;
        padding: 0 10px;
        outline: none;
        font-size: 20px;
      }
    }
    .button{
      height: 50px;
      width: 96%;
      margin: auto;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      border-radius: 6px;
      margin-top: 20px;
      background:  #ff464e;
    }

    .mint-tab-container{
      width: 96%;
      margin: auto;
  }
    .other-action{
        width: 95%;
        margin: 10px auto;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
      .mobile{
    height: 110px;
    font-size: 14px;
    input{
      height: 40px;
      width: 94%;
      margin-top: 10px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .code{
      width: 74%;
    }
    span{
      width: 30%;
      color: #999;
      cursor: pointer;
    }
  }
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #ff464e;
    color: #ff464e;
    margin-bottom: 0;
  }
  </style>
  