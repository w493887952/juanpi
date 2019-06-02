<template>
    <div class="tabbar">
		<ul>
           <li>
               <router-link :to="{ name: 'home' }">
				   
                   <p><span class="iconfont back-icon">&#xe60a;</span>首页</p>
               </router-link>    
           </li>
           <li>
              <router-link :to="{ name: 'classify' }">
                  <p><span class="iconfont back-icon">&#xe61e;</span>分类</p>
              </router-link>    
           </li>
           <li>
               <router-link :to="{ name: 'cart' }">
                   <p><span class="iconfont back-icon">&#xe635;</span>购物车</p>
               </router-link>
           </li>
           <li>
               <router-link :to=" { name: 'user' } ">
                   <p><span class="iconfont back-icon">&#xe607;</span>我的卷皮</p>
               </router-link>
           </li>
        </ul>
    
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	ul{
		width: 100%;
		li{
			width: 25%;
			float: left;
            text-align: center;
            p{
                font-size: 12px;
                margin-bottom: 2px;
                span{
                    display: block;
                    font-size: 20px;
                    padding: 5px 0;
                }
            }
			.router-link-exact-active{
				p{
				   color: red;
			
				}
			}
		}
	}

}

</style>
