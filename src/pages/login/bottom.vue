<template>
    <div class="loginbotton">
         <p class="title">第三方账号快速登录</p>
         <ul>
             <li>
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" alt="">
             </li>
             <li>
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" alt="">
             </li>
             <li>
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" alt="">
             </li>
         </ul>

         <div class="tb">
             <p>
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt="">
                 <span>全场包邮</span>
             </p>
             <p>
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" alt="">
                 <span>100%人工质检</span>
                 </p>
             <p class="right">
                 <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" alt="">
                 <span>7天放心退</span>
             </p>
         </div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.loginbotton{
    .title{
        text-align: center;
        margin: 50px auto 20px;
    }
    ul{
        width: 350px;
        margin: auto;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        li{
            width: 33.333333%;
            text-align: center;
            img{
                width: 43px;
                height: 43px;
            }
        }
    }
    .tb{
        width: 90%;
        margin: auto;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        margin-top: 60px;
        p{
            width: 33.333333%;
            img{
                width: 22px;
                height: 22px;
            }
        }
        .right{
            text-align: right;
        }
    }
}
</style>
