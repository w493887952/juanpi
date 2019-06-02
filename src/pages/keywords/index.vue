<template>
    <div class="keywords">
         <div class="header">
             <p>
             <i class="iconfont">&#xe632; </i>
             <input type="text" placeholder="搜索商品" >
             <b>×</b>
             </p>
             <span>
                  <router-link tag="div" to="/">
                      取消
                  </router-link>
             </span>
         </div> 
     
           <Tabbar/>





           
    </div>
</template>
<script>
import Tabbar from "@/pages/core/tabbar"
export default {
      components: {
      Tabbar
  },
  data(){
      return{
         
      }
  }
}
</script>
<style lang="scss" >
.keywords{
    .header{
        width: 96%;
        height: 50px;
        margin: 10px auto 0; 

       
        p{ 
            position: relative;
            float: left;
            width: 85%;
            i{
                font-size: 20px;
                position: absolute;
                left: 8px;
                top: 5px;
                }
            input{
                height: 30px;
                width: 100%;
                font-size: 20px;
                text-indent: 1.5em;
                border: none;
                background: #eee;
                border-radius: 5px;
                
            }
            b{
                font-size: 30px;
                position: absolute;
                right: 8px;
                top: 2px;
            }
        }
        span{
            width: 15%;
            float: right;
            font-size: 20px;
            margin-top: 6px;
            text-align: right;
    }
    }
  
}


</style>

