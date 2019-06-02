<template>
<div class="articleswiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperImg" :key="item.id">
            <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="OnOff iconfont" @click="toggle">&#xe6a5;</div>
          <div class="toggle" v-if="play">
              <p class="triangle_border_up"></p>
              <ul>
                <li><i class="iconfont">&#xe60a;</i> 首页</li>
                <li><i class="iconfont">&#xe678;</i> 我的收藏</li>
                <li><i class="iconfont">&#xe6c1;</i> 我的订单</li>
            </ul>
          </div> 
</div>
    
</template>
<script>
import axios from 'axios'

  export default {
   
    data() {
      return {
            swiperImg: [],

        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
        },
        play: false,
      }
    },
    methods: {
      toggle: function () {
        this.play = !this.play
      },
      getarticle() {
           axios.get('/static/mock/merchandise.json')   
           .then(this.getarticledata)
        },
        getarticledata (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.swiperImg = data.swiperImg

            }
        }
      },
      mounted () {
        this.getarticle()
    }
    
  }
</script>
<style lang="scss" scoped>
    .articleswiper{
          img{
                width: 100%;
                height: auto;
          }
          .swiper-pagination{
            width: 30px;
            height: 18px;
            line-height: 18px;
            color:#fff;
            border-radius: 2px;
            background: rgba(0,0,0,0.3);
            margin-left: 85%;
            margin-bottom: 20px;
          }
          .OnOff{
            width: 30px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            text-align: center;
            font-size: 30px;
            background: rgba(0,0,0,0.3);
            border-radius: 50%;
            position: fixed;
            right: 15px;
            top: 15px;
            z-index: 99999;
      }
      .toggle{
        ul{
          height:100px;
          width:100px;
          background: rgba(0,0,0,0.7);
          position: fixed;
          right: 5px;
          top: 58px;
          z-index: 10;
          border-radius: 5px;
          li{
            width: 80%;
            margin: auto;
            color: #fff;
            font-size: 15px;
            line-height: 33px;
            height: 35px;
            border-bottom: 1px solid#666;
            i{
                font-size: 15px;
              }
          }
           li:nth-child(3){
                border-bottom: none;
            }
        }
        .triangle_border_up{
          width:15px;
          height: 15px;
          border-width: 0 8px 8px;
          border-style: solid;
          border-color: transparent transparent rgba(0, 0, 0, 0.7);
          position: fixed;
          right: 23px;
          top: 43px;
          z-index: 10;
        }
      }
      

  }
</style>
