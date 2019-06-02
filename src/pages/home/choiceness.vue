<template>
    <div class="choiceness">
        <div class="adb" v-for="item in adb" :key="item.id">
           <img :src="item.imgUrl" alt="">
       </div>

        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">精选专场</mt-tab-item>
            <mt-tab-item id="2">精选单品</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" >
               <ul>
                   <router-link tag="li" to="/special" v-for="item in choicenessleft" :key="item.id" >
                       <div class="sc-jnlKLf">
                           <img v-lazy="item.imgUrl" alt="">
                       </div>
                       <div class="logo">
                            <img v-lazy="item.logo" alt="">
                       </div>
                       <div class="text">
                           <p>{{item.activity}}</p>
                           <div class="store">
                               <span>{{item.name}}</span><em>{{item.day}}</em>
                           </div>
                       </div>
                   </router-link>
               </ul>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                 <ul>
                   <li v-for="item in choicenessright" :key="item.id">
                       <div class="sc-jnlKLf">
                           <img  v-lazy="item.imgUrl" alt="">
                       </div>
                       <div class="logo">
                            <img v-lazy="item.logo" alt="">
                       </div>
                       <div class="text">
                           <p>{{item.activity}}</p>
                           <div class="store">
                               <span>{{item.name}}</span><em>{{item.day}}</em>
                           </div>
                       </div>
                   </li>
 
               </ul>
            </mt-tab-container-item>
        </mt-tab-container>



    </div>
</template>
<script>

export default {
  name: 'page-navbar',
  props: {
      adb: Array,
      choicenessleft: Array,
      choicenessright: Array
  },
  data() {
    return {
      selected: '1'
    };
  }
};
</script>

<style lang="scss" scoped>
.choiceness{
       .adb{
        height: 60px;
        display: flex;
        justify-content:space-between;
        -webkit-align-items: center;
        background-color: #f2f2f2;
        img{
            width: 100%;
        }
    }
    .mint-navbar{
        width: 45%;
        
        }
    	
    ul{
        width: 100%;
        height: auto;
        li{
            width: 50%;
            height: 242px;
            float: left;
            margin-top: 5px;
            position: relative;
            
            .sc-jnlKLf{
                img{
                    
                    width: 99%;
                    height: 186px;
                }
            }
            .logo{
                img{
                    width: 50px;
                    height: 25px;
                    position: absolute;
                    top: 160px;
                    right: 5px;
                }    
            }
            .text{
                width: 95%;
                margin: 5px auto;
                p{
                    font-size: 20px;
                    color: #ff464e;
                }
             
                .store{
                    margin-top: 5px;
                    width: 96%;
                    display: flex;
                    display: -webkit-flex;
                    -webkit-justify-content: space-between;
                    justify-content: space-between;
                    span{
                        width: 70%;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        color: #3b3b3b;
                        font-size: 15px;
                    }
                }
            }
        }
    }
    .mint-navbar .mint-tab-item{
          font-size: 20px;
          color: #000;
      }
    .mint-navbar .mint-tab-item.is-selected{
          color: red;
          border-bottom:3px solid #ff464e;
      }
      
}
</style>
