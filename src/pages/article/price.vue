<template>
<div class="articletop">
    <ul v-for="item in shangpin" :key="item.id">
        <li>
            <p>¥<span>{{item.price}}</span> <i>¥{{item.oldprice}}</i> <em>{{item.postage}}</em></p>
            <div class="title">{{item.title}}</div>
        </li>
        <li>
            <p>{{item.amount}}人已购</p>
            <i class="iconfont">&#xe61b;</i>
        </li>
    </ul>
</div>
    
</template>
<script>
export default {
     props: {
      shangpin: Array
    }, 
}
</script>
<style lang="scss" scoped>
  .articletop{
      width: 100%;
      height: auto;
      
      ul{
          width: 90%;
          margin: 15px auto;
          display: flex;
          justify-content: space-between;
          li{
              .iconfont{
                  font-size: 30px;
                  display: block;
                  margin: 9px 0 0 32px;
              }
          }
          li:nth-child(1){
              p{
                  color: red;
                  span{
                      font-size: 20px;
                  }
                  i{
                      color:#bbbbbb;
                      text-decoration:line-through;
                  }
                  em{ 
                      padding: 0 2px 0 2px; 
                      background-color: rgb(255, 70, 78);
                      border-color: rgb(255, 70, 78);
                      color: rgb(255, 255, 255);

                  }
              }
              .title{
                  margin-top: 10px;
                  
              }
          }
      }
  }
</style>
