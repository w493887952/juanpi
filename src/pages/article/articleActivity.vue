<template>
    <div class="Activity">
        <div class="mj">
          <div class="popup" @click="toggle"><span>满件减</span> 满2件减10元<i class="iconfont">&#xe6a5;</i></div>
        </div>
        <div class="service" @click="toggle2">
            <p>
                <span style="margin-left:-10px;">•</span> <em>24小时发货</em>
                <span>•</span> <em>7天包退</em>
                <span>•</span> <em>售后补贴</em>
                <i class="iconfont">&#xe6a5;</i>
            </p>
        </div>

        <transition>
            <div class="popup_f" v-if="popup_f">
                <p>促销 <i @click="toggle" class="iconfont">&#xe677;</i></p>
                 <a href="#"><span>满件减</span>满2件减10元<i>></i></a>
            </div>
        </transition>

         <transition>
            <div class="popup_s" v-if="popup_s">
                  <p>服务说明 <i @click="toggle2" class="iconfont">&#xe677;</i></p>
            </div>
        </transition>
    </div>
</template>
<script>

export default {
    data () {
        return{
            popup_f:false,
            popup_s:false,

        }
    },
    methods :{
         toggle: function () {
             this.popup_f =!this.popup_f
         },
         toggle2: function () {
             this.popup_s =!this.popup_s
         },
    }
}
</script>
<style lang="scss" scoped>
.Activity {
        border-bottom: 5px solid #f3f3f3;
        border-top: 5px solid #f3f3f3;
    .mj{
        width: 90%;
        margin: auto;
        padding-top: 15px;
        span{
            background-color: #ff464e;
            font-size: 0.4rem;
            color: #ffffff;
            line-height: 10px;
            
        }
        i{
            font-size: 30px;
            float: right;
            line-height: 10px;
        }
    }
   .popup_f{
    height: 40%;
    width: 100%;
    background: #f3f3f3;
    position: fixed;
    bottom: 0;
    z-index: 10;
    p{
        font-size: 20px;
        color: #000;
        text-align: center;
        padding: 15px;
        i{
            font-size: 15px;
            position: absolute;
            right: 10px;
            font-size: 20px;
        }
    }
    a{
        display: block;
        color: #000;
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #e0e0e0;
        
        padding: 15px 10px 15px 30px;

        span{
                color: #ff464e;
                border: 1px solid #ff464e;
                font-size: 0.4266666666666667rem;
                padding-left: 0.08533333333333333rem;
                padding-right: 0.08533333333333333rem;
                text-align: center;
                min-width: 0.8533333333333334rem;
                max-width: 1.4933333333333334rem;
                height: 0.64rem;
                margin-right: 10px;
        }
        i{
            float: right;
            color: #666;
        }
        
    }
}
    .app-container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter{
        
        transform: translatey(100%);
    }
    .v-leave-to{
        
        transform: translatey(100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
    .service{
        width: 90%;
        margin: 15px auto;
        span{
            color:red;
            padding-left: 10px;
        }
        i{
            float: right;
            color: #666;
            font-size: 30px;
            line-height: 12px;
        }
    }
    .popup_s{
            height: 40%;
            width: 100%;
            background: #f3f3f3;
            position: fixed;
            bottom: 0;
            text-align: center;
            z-index: 10;
            p{
                font-size: 20px;
                padding: 10px;
                color: #000;
                i{
                    font-size: 25px;
                    float: right;
                    line-height: 17px;
                }
            }
    }
}

</style>
