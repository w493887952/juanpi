<template>
    <div class="special">
             <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">春夏上新</mt-tab-item>
            <mt-tab-item id="2">特价春款</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" >
               <ul>
                  <router-link tag="li" to="/article" >
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </router-link>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                    <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods6.juancdn.com/goods/190319/b/7/5c90661933b0890fbd031fbf_800x800.jpg?imageMogr2/thumbnail/310x310!" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  
               </ul>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                 <ul>
                     <li>
                      <img src="https://goods3.juancdn.com/goods/190319/4/5/5c90682bb6f8ea669e263542_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  <li>
                      <img src="https://goods3.juancdn.com/goods/190319/4/5/5c90682bb6f8ea669e263542_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310" alt="">
                      <div class="left">
                        <strong>¥49.9</strong>
                        <span>¥99</span>
                        <i>南极人纯棉睡衣短袖</i>
                      </div>
                  </li>
                  
               </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
    
</template>


<script>
export default {
       data () {
      return {
        selected: '1',
      }
    },
}
</script>
<style lang="scss" scoped>
     .special{
         ul{
            
             li{
                 float: left;
                 color:#fff;
                 width: 50%;
                 height:206px;
                 box-sizing: border-box;
                 overflow: hidden;
                 img{
                     width: 100%;
                     height: 75%;
                 }
                 .left{
                     margin: 10px;
                     i{
                     display: block;
                     color:#000;
                 }
                 
                 span{
                     text-decoration:line-through;
                     color:#bbb;
                 }
                 strong{
                     font-size:18px;
                     color:#ff464e;
                 }
                     
                 }
                 
             }
             li:nth-child(2n){
                border-left:1px solid #fff;
             }
             li:nth-child(2n+1){
                border-right:1px solid #fff;
             }
         }
         .mint-navbar .mint-tab-item.is-selected{
             border-bottom:2px solid red;
             color: red;
             
             
         }
         .mint-tab-item{
             color: #000;
         }
         .mint-tab-container{
             margin-top: 10px;
         }
     }
</style>
