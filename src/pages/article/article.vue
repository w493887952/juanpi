<template>
  <div class="detail">
        <article-swiper></article-swiper>


    <div class="detail-title">
      <div>
        <span class="price">￥{{detailInfo.price}}</span>
        <b>￥{{detailInfo.oldprice}}</b>
        <span class="by">包邮</span>
        <strong><i>{{detailInfo.person}}</i>人已购</strong>
      </div>
      <h2>{{detailInfo.title}}<span class="icon"></span></h2>
    </div>

         <article-activity></article-activity>

         <article-model/>


         <articlefotter/>



    <div class="tabbar">
		<ul>
           <li>
               <router-link :to="{ name: 'home' }">
				   
                   <p><span class="iconfont back-icon">&#xe60a;</span>首页</p>
               </router-link>    
           </li>
            <li>
               <router-link :to="{ name: 'cart' }">
                   <span class="cartCount">{{totalCount}}</span>
                   <p><span class="iconfont back-icon">&#xe635;</span>购物车</p>
               </router-link>
           </li>
           <li>
              <router-link tag="p" :to="{ name: 'classify' }">
                  立即购买
              </router-link>    
           </li>
       
           <li>
               <p @click="addCartLists(detailInfo)">
                   加入购物车
               </p>
           </li>
        </ul>
    </div>


  </div>
</template>

<script>
import ArticleSwiper from "./articleswiper"
import articleModel from "./articleModel"
import articleActivity from "./articleActivity"
import articlefotter from "./articlefotter"


import {
  mapMutations,
  mapGetters,
  mapState
} from 'vuex'
import { Toast } from 'mint-ui'
export default {
     
  name: 'detail',
   components:{
       ArticleSwiper,
       articleModel,
       articleActivity,
       articlefotter,


    },
  data () {
    return {
      selected: '1',
      detailInfo: {}
    }
  },
  methods: {
    getInfo () {
      this.$http.get('http://rap2api.taobao.org/app/mock/118647/api/detail/:id')
        .then(resp => {
          if (resp.data.code === 200 && resp.data.errorMsg === 'OK') {
            this.detailInfo = resp.data.data
          } else {
            Toast({
              message: '网络出错，请稍后重试！',
              duration: 1000
            })
          }
        })
    },

    toCart () {
      this.$router.push('/cart')
    },


    addCartLists (proInfo) {
      if (this.user.isLogin === false) {
        this.$router.push('/login')
        return false
      } else {
        const detailInfo = {
          id: proInfo.id,
          title: proInfo.title,
          price: proInfo.price,
          oldprice: proInfo.oldprice,
          count: 1,
          isChecked: false
        }
        this.addCart(detailInfo)
      }
    },
    buyHandle () {
      Toast({
        message: '假的，还不能点哦！',
        duration: 1000
      })
    },
    ...mapMutations(['hideTabbar', 'addCart'])
  },
  computed: {
    ...mapGetters(['totalCount']),
    ...mapState(['user'])
  },
  created () {
    this.getInfo()
  },
  mounted () {
    this.hideTabbar()
  }
}
</script>

<style lang='scss' scoped>

.detail{
  width: 100%;
  height: 100%;
  background: #f4f4f8;

  &-title{
    width: 100%;
    height: 80px;
    background: #fff;
    div{
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      .price{
        float: left;
        font-size: 20px;
        color: #ff464e;
      }
      b{
        float: left;
        font-size: 12px;
        color: #bbbbbb;
        text-decoration: line-through;
        padding: 0 10px;
      }
      .by{
        display: inline-block;
        height: 22px;
        line-height: 25px;
        width: 35px;
        font-size: 14px;
        background: #ff464e;
        text-align: center;
      }
      strong{
        float: right;
        color: #999;
        font-size: 12px;
      }
    }
    h2{
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      padding-bottom: 10px;
      font-size: 20px;
      color: #333;
      .icon{
        font-family: 'iconfont';
        float: right;
        font-weight: bolder;
        font-size: 25px;
      }
      .icon:hover{
        color: #ff464e;
      }
    }
  }

}

.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
  background-color: #fff;
  margin-top: 10px;

	ul{
		width: 100%;
		li{
			width: 20%;
			float: left;
            text-align: center;
            border-right: 1px solid #e7e7e7;
            p{
                font-size: 12px;
                margin-bottom: 2px;
                span{
                    display: block;
                    font-size: 20px;
                    padding: 5px 0;
                }
            }
			.router-link-exact-active{
				p{
				   color: red;
				}
			}
        }
        li:nth-child(2){
            .cartCount{
                position: absolute;
                background: red;
                width: 15px;
                height: 15px;
                border-radius: 50px;
                color: #fff;
                line-height: 15px
         }
        }
        li:nth-child(3){
            width: 25%;
            p{
                height: 42px;
                line-height: 42px;
            }
           
        }
        li:nth-child(4){
            width: 35%;
            background: #ff464e;
           
            border-right: none;
            p{
                color: #fff;
                height: 42px;
                line-height: 42px;
            }
           
        }
	}

}

</style>
