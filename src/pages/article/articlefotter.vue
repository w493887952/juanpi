<template>
    <div class="articlefotter">
        <div class="name">
            <ul v-for="item in dianpu" :key="item.id">
                <li>
                <img :src="item.img" alt="">
                </li>
                <li>   
                    <span>{{item.shopName}}</span>
                    <p>共{{item.quantity}}件商品</p>
                </li>
                <li @click="entranceShop">
                    进入店铺
                </li>
            </ul>
        </div>
        <div class="particulars">
            
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">图文详情</mt-tab-item>
            <mt-tab-item id="2">商品参数</mt-tab-item>
            <mt-tab-item id="3">咨询与售后</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected" class="box">
            <mt-tab-container-item id="1" >
              <p class="remind">商家提醒：<span>此商品由品牌商从<i>【广东广州】</i>发货。</span></p>
              <img src="https://goods8.juancdn.com/goods/180403/e/b/5ac384ffa9fcf8a5a6564204_750x635.jpg" alt="">
              <img src="https://goods6.juancdn.com/goods/180403/b/3/5ac385058150a1625242056b_750x541.jpg" alt="">
              <img src="https://goods7.juancdn.com/goods/180403/c/d/5ac3850d8150a162671de47f_750x543.jpg" alt="">
              <img src="https://goods8.juancdn.com/goods/180403/e/c/5ac385138150a16293176925_750x538.jpg" alt="">
              <img src="https://goods2.juancdn.com/goods/180403/3/4/5ac385308150a160a150470d_750x1051.jpg" alt="">
              <img src="https://goods2.juancdn.com/goods/180403/3/4/5ac385308150a160a150470d_750x1051.jpg" alt="">
              <img src="https://goods2.juancdn.com/goods/180403/2/1/5ac3853a8150a160a479c142_750x965.jpg" alt="">
              <img src="https://goods3.juancdn.com/goods/180403/4/6/5ac385408150a161116f73df_750x867.jpg" alt="">
              <img src="https://goods3.juancdn.com/goods/180403/5/3/5ac3854c8150a1612643a273_750x970.jpg" alt="">
              <img src="https://goods4.juancdn.com/goods/180403/7/7/5ac385558150a16174616a31_750x751.jpg" alt="">
              <img src="https://goods4.juancdn.com/goods/180403/7/7/5ac385658150a161ab1b7af0_750x1118.jpg" alt="">
              <img src="https://goods8.juancdn.com/goods/180403/f/5/5ac385a0a9fcf8a60645a604_750x965.jpg" alt="">
              <img src="https://goods1.juancdn.com/goods/180403/1/0/5ac385bb8150a162e25c91e5_750x751.jpg" alt="">
              <img src="https://goods1.juancdn.com/goods/180403/0/b/5ac384e8a9fcf8a57b707314_750x964.jpg" alt="">
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                 <ul>
                     <li><em>常用快递</em><span>圆通速递</span></li>
                     <li><em>运费</em><span>全国包邮(偏远地区除外)</span></li>
                     <li><em>款号</em><span>8016</span></li>
                     <li><em>面料主材质</em><span>棉</span></li>
                     <li><em>适用性别</em><span>女</span></li>
                 </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                 <img src="./img/fw.png" alt="">
            </mt-tab-container-item>
        </mt-tab-container>


        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
 
    data () {
         return {
         selected: '1',
         dianpu: []

         }
    },
    methods: {
        entranceShop() {
            this.$router.push('/Shop')
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
                this.dianpu = data.dianpu
            }
        }
    },
      mounted () {
        this.getarticle()
    }
}
</script>
<style lang="scss" scoped>
.articlefotter{
    margin-bottom: 60px;
    .name{
        height: 50px;
        border-bottom: 1px solid #f6f6f6;
        ul{
            padding: 10px;
            li{
                float: left;
                img{
                    width: 45px;
                   height: 25px;
                   margin-top: 5px;
                }
            }
            li:nth-child(2){
                padding-left: 10px;
                font-size: 17px;
                line-height: 18px;
            }
            li:nth-child(3){
                padding: 5px;
                border: 1px solid #333;
                float: right;
                margin-top: 5px;
            }
        }
    }
    .particulars{
        .remind{
            color: #f70;
            font-size: 15px;
            padding: 10px;
            border-bottom: 5px solid #f3f3f3;
            i{
                color: #333;
            }
            span{
                color:#9b9b9b;
            }
        }
         img{
               width: 100%;
               height: auto;
            }

    }
    .box{
        margin-top: 10px;
        ul{
            width: 90%;
            margin: auto;
            li{
                color: #bbb;
                font-size: 14px;
                margin-top: 10px;
                span{
                    color: #4a4a4a;
                     padding-left: 50px;

                }
               em{
                   display: inline-block;
                  width: 70px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
               }
            }
        }
    }
}
</style>

