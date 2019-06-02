<template>
  <div class="home_search">   
    <p>
      <i class="iconfont">&#xe632;</i>
       <span>搜索</span>
    </p>
    <a><img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt=""></a>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="scss" scoped>
.home_search{
  width: 94%;
  margin: auto;
  display: flex;
  justify-content:space-between;
  -webkit-align-items: center;
  align-items: center;
    p{
      width: 87%;
      height: 35px;
      line-height: 35px;
      background-color: #f2f2f2;
      border-radius: 5px;
      color: red;
      i{
        padding-left: 5px;
        color: #999;
      }
      span{
        color: #999;
      } 
    }
    a{
      img{
        width: 50px;
        height:50px;
      }
    }
}
</style>