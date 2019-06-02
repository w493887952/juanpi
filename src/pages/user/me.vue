<template>
    <div class="me">
        <ul>
            <li>我的优惠券</li>
            <li>我的收藏</li>
            <li>我的拼团</li>
            <li>
                <i>我的免单券</i>
                <span>0张</span>
            </li>
            <li>
                <i>借钱</i>
                <span>新用户免费领1000元</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.me{
    ul{
        width: 100%;
        border-top: 10px solid #f4f4f8;
        li{
            width: 94%;
            margin: auto;
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            color: #333;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            span{
                color: #999;
            }
        }
    }
}
</style>

