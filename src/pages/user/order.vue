<template>
    <div class="order">
        <div class="dd">
            <p>我的订单</p>
            <p>全部订单</p>
        </div>
        <ul>
            <li>
                <p class="iconfont">&#xe747;</p>
                <span>待付款</span>
            </li>
            <li>
                <p class="iconfont">&#xe604;</p>
                <span>待成团</span>
            </li>
            <li>
                <p class="iconfont">&#xe622;</p>
                <span>待收货</span>
            </li>
            <li>
                <p class="iconfont">&#xe70b;</p>
                <span>退款/售后</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.order{
    .dd{
        width: 94%;
        margin: 20px auto;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        p{
            font-size: 16px;
            color: #333;
        }
    }
    ul{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content:space-between;
        color: #666;
        font-size: 13px;
        margin-top: 30px;
        margin-bottom: 30px;
        li{
            text-align: center;
            width: 25%;
            p{
                font-size: 30px;
                margin-bottom: 10px;
                color: #666;
            }
        }
    }
}
</style>
