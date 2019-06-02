<template>
    <div class="classify app">
        <router-link to="/Keywords">
        <div class="search">
            <p class="iconfont">&#xe632; <span>搜索商品</span></p>
        </div>
        </router-link>

        
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item v-for="item in page" :key="item.id" class="em" :id="item.id">{{item.title}}</mt-tab-item>
        </mt-navbar>

        
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="box" >
             <ul>
                 <li>
                     <a href="">
                         <img src="http://s2.juancdn.com/bao/190219/3/c/5c6b7fd833b089288313b68d_200x200.jpg?iopcmd=convert&dst=webp" alt="">
                         <span>女士裙装</span>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <img src="http://s2.juancdn.com/bao/190219/3/c/5c6b7fd833b089288313b68d_200x200.jpg?iopcmd=convert&dst=webp" alt="">
                         <span>女士裙装</span>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <img src="http://s2.juancdn.com/bao/190219/3/c/5c6b7fd833b089288313b68d_200x200.jpg?iopcmd=convert&dst=webp" alt="">
                         <span>女士裙装</span>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <img src="http://s2.juancdn.com/bao/190219/3/c/5c6b7fd833b089288313b68d_200x200.jpg?iopcmd=convert&dst=webp" alt="">
                         <span>女士裙装</span>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <img src="http://s2.juancdn.com/bao/190219/3/c/5c6b7fd833b089288313b68d_200x200.jpg?iopcmd=convert&dst=webp" alt="">
                         <span>女士裙装</span>
                     </a>
                 </li>
             </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="box">
                 2
            </mt-tab-container-item>
             <mt-tab-container-item id="3" class="box">
                 3
            </mt-tab-container-item>
             <mt-tab-container-item id="4" class="box">
                 4
            </mt-tab-container-item>
             <mt-tab-container-item id="5" class="box">
                 5
            </mt-tab-container-item>
             <mt-tab-container-item id="6" class="box">
                 6
            </mt-tab-container-item>
             <mt-tab-container-item id="7" class="box">
                7
            </mt-tab-container-item>
             <mt-tab-container-item id="8" class="box">
                 8
            </mt-tab-container-item>
             <mt-tab-container-item id="9" class="box">
                9
            </mt-tab-container-item>
             <mt-tab-container-item id="10" class="box">
                 10
            </mt-tab-container-item>
            <mt-tab-container-item id="11" class="box">
                 11
            </mt-tab-container-item>
                  <mt-tab-container-item id="12" class="box">
                 12
            </mt-tab-container-item>
                  <mt-tab-container-item id="13" class="box">
                 13
            </mt-tab-container-item>
                  <mt-tab-container-item id="14" class="box">
                 14
            </mt-tab-container-item>
        </mt-tab-container>
        
           <Tabbar/>
    </div>
</template>
<script>
import Tabbar from "@/pages/core/tabbar"
import axios from 'axios'
export default {
      components: {
      Tabbar
  },
   data() {
    return {
      selected: '1',
      page: [],
    };
  },
  methods: {
      getclassify () {
          axios.get('/static/mock/classify.json')
          .then(this.getclassifySucc)
      },
      getclassifySucc (res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.page = data.page
          }
      }
  },
  mounted () {
      this.getclassify()
  }
}
</script>
		
<style lang="scss" scoped>
.classify{
    .search{
        width: 96%;
        height: 30px;
        margin: 10px auto 0;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #bbb;
        p{
            font-size: 20px;
            margin-left: 2%;
        }
    }
   .mint-navbar{
       display: inline-block;
       margin-top: 15px;
   }
   .mint-tab-container{
       width: 76%;
       background: #eee;
       float:right;
       margin-top: 22px;
   }
   .mint-navbar .mint-tab-item.is-selected{
       
       color: red;
       border-bottom:none;
       border-left: 2px solid red;
      
   }
   .em{ text-indent: 1em;

   }
   .box{
       height: 400px;
   }

    .mint-navbar[data-v-931644ea]{
        text-align: left;
        
    }
    .box{
        ul{
            li{
                width: 90px;
                height: 93px;
               
                float: left;
                border: 1px solid #fff;
                a{
                    text-align: center;
                    display: block;
                    margin: auto;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                    span{
                        display: block;
                        text-align: center;
                        color: #333;
                        line-height: 40px;
                        font-size: 16px;
                    }
                }
            }
        }
    }

}
</style>
