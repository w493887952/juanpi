<template>
        <div class="login_top">
            <router-link :to="{ name: 'home' }">
                <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" alt="">
            </router-link>
            <p>登录</p>
            <router-link tag="i" :to="{ name: 'zhuce' }">
                注册
            </router-link>
        </div>
</template>
<script>

export default {


}
</script>
<style lang="scss" scoped>

   .login_top{
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: #ff5a61;
        background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
        color: #fff;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center ;
        align-items: center ;
        padding: 0 10px 0 5px;

        img{
            width: 25px;
            height: 25px;
            display: inline-block;
        } 
        p{
            font-size: 20px;
            color: #fff;

        }
        i{
            font-size: 15px;
        }
    }

</style>

