<template>
    <div class="specialTop">
        <dl>
            <dd @click="GoBack" class="iconfont">&#xe6a4;</dd>
            <dd>微密码女装清仓专场</dd>
            <dd class="iconfont" 
                @click="toggle">&#xe6a5;</dd>
        </dl>
        <div class="toggle"  v-if="play">
            <p class="triangle_border_up"></p>
            <ul>
                <li><i class="iconfont">&#xe60a;</i> 首页</li>
                <li><i class="iconfont">&#xe678;</i> 我的收藏</li>
                <li><i class="iconfont">&#xe6c1;</i> 我的订单</li>
            </ul>
        </div>

        <div class="logo">
           <ul>
               <li>
                   <img src="https://goods5.juancdn.com/bao/170407/8/3/58e70ae9a43d1f7a8456524c_180x90.png" alt="">
               </li>
               <li><span>微密码女装清仓专场</span><p>50.1万人已购</p></li>
               <li><a href="#" class="iconfont">&#xe61b;</a></li>
           </ul>
          
        </div>
         <div class="discounts">
                <span>满件减</span>
                满1件减5元,满2件减8元
           </div>
 
    </div>
</template>


<script>

export default {
    data () {
        return{
            play: false,
        }
    },
    methods: {
        GoBack () {
            this.$router.go(-1)
        },
        toggle: function () {
            this.play = !this.play
        }


    }
}
</script>
<style lang="scss" scoped>
.specialTop{
    dl{
        width: 100%;
        height: 44px;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        dd{
            float: left;
            line-height: 44px;
            font-size: 0.568rem;
            color: #333;
        }
        dd:nth-child(1){
            margin-left: 5px;
            font-size: 25px;
        }
        dd:nth-child(3){
            margin-right: 15px;
            font-size: 30px;
        }

    }
    .toggle{
        ul{
            height: 100px;
            width: 100px;
            background: rgba(0,0,0,0.7);
            position: absolute;
            right: 10px;
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
                height:15px;
                border-width:0 8px 8px;
                border-style:solid;
                border-color:transparent transparent rgba(0,0,0,0.7);/*透明 透明  灰*/
                position: absolute;
                right: 22px;
                top: 29px;
                }
        }
        .logo{
            width: 100%;
            height: 75px;
            border-top: 10px solid #f6f6f6;
            ul{
                margin-top: 10px;
              li{
                  font-size: 15px;
                float: left;
                img{
                width: 40px;
                height: 20px;
                margin: 7px 10px 0px 15px;
            }
            p{
                margin-top: 10px;
                }
            }
            li:nth-child(3){
                float: right;
                padding-right: 20px;
                a{
                    font-size: 25px;
                    color: #222;
                }
            }
            
            }
            
        }
       .discounts{
           height: 28px;
          span{
                padding-left: 0.21333333333333335rem;
                padding-right: 0.21333333333333335rem;
                margin-right: 0.5973333333333334rem;
                margin-left: 28px;
                color: #ff464e;
                border: 1px solid #ff464e;
          }
       }
   
}
</style>
