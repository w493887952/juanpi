<template>
    <div class="head">
          <div class="title">
              <router-link to="/" class="iconfont" href="">
                   &#xe6a4;
              </router-link>
              <span>个人中心</span>
          </div>
          <dl v-if="isLogin === false">
             <dd @click="handleLogin">登录</dd>
             <dt @click="handleRegister">注册</dt>
          </dl> 
          <div v-if="isLogin === true">
          <ul>
              <li><img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" alt=""></li>
              <li>
                  <a href="">{{username}}</a>
                  <a href="">我的账户 ></a>
              </li>
          </ul>
          <div class="loginout" @click="dropOut">
               退出
          </div>
        </div> 
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { Toast, MessageBox } from 'mint-ui'
export default {
      data () {
        return {
            username: '',
            isLogin: false
        }  
      },
  methods: {
      handleLogin () {
        this.$router.push('/login')
      },
      handleRegister() {
          this.$router.push('/Register')
      },
    dropOut () {
      MessageBox.confirm('确定退出吗?').then(action => {
        this.logout()
        Toast('退出成功！')
        this.$router.push('/')
      }).catch(() => {
      })
    },
        ...mapMutations(['hideTabbar', 'logout'])
  },
    mounted () {
    this.hideTabbar()
    const userInfo = JSON.parse(window.localStorage.getItem('user-info')) || {}
    this.username = userInfo.username ? userInfo.username : ''
    this.isLogin = userInfo.isLogin ? userInfo.isLogin : false
  }
}

</script>
<style lang="scss" scoped>
.head{
    width: 100%;
    height: 144px;
    background-image: url(./img/user_center_bg.png);
    background-position: bottom;
    background-repeat: no-repeat;
    .title{
        height: 62px;
        line-height:62px;
        color: #fff;
        font-size: 20px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center ;
        align-items: center ;
        text-align: center;
        a{
          position: absolute;
          font-size: 30px;
          color: #fff;
        }
        span{
           text-align: center;
           margin: auto;

        }
    }
    dl{
        width: 50%;
        margin: 10px auto;
        font-size: 20px;
        color: #fff;
        display: flex;
        justify-content:space-between;
        -webkit-align-items: center;
        align-items: center;
        text-align: center;
        dt{
            border-left: 1px solid #fff;
            width: 50%;
            text-align: center;

        }
        dd{
            width: 50%;
            text-align: center;
        }
        }
    ul{
        li{
            float: left;
            margin-left: 15px;
            img{
               width: 45px;
               height: 45px;
               border-radius: 50%;
            }
            a{
                color: #fff;
                display: block;
                line-height: 23px;
            }
        }
    }   
    .loginout {
        font-size: 19px;
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
    }
    
}

</style>

