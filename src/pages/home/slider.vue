<template>
  <div class="slide">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
import axios from 'axios'

  export default {
    name: 'slider',
    props: {
      swiperList: Array
    }, 
    data() {
      return {
  

        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
      }
    },


  }
</script>

<style lang="scss" scoped>
.slide{
    img{
        width: 100%;
        text-align: center;
    }
    .swiper-pagination-bullet-active{
        background: #fff;
       
    }
}
</style>