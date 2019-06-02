<template>
    <div class="about">
        <ul>
            <li>客服中心</li>
            <li>关于卷皮</li>
        </ul>
        <div class="bottom">
             <a>返回首页</a>
             <a>客户端</a>
             <a>电脑版</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.about{
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
        }
    }
    .bottom{ 
            width: 60%;
            height: 150px;
            margin:auto;
            border-top: 10px solid #f4f4f8;
            padding-top: 20px;
            
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            a{
                color: #666;
            }
    }
}
</style>

