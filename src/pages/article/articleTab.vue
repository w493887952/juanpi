<template>
    <div class="tabbar">
		<ul>
           <li>
               <router-link :to="{ name: 'home' }">
				   
                   <p><span class="iconfont back-icon">&#xe60a;</span>首页</p>
               </router-link>    
           </li>
            <li>
               <router-link :to="{ name: 'cart' }">
                   <p><span class="iconfont back-icon">&#xe635;</span>购物车</p>
               </router-link>
           </li>
           <li>
              <router-link tag="p" :to="{ name: 'classify' }">
                  立即购买
              </router-link>    
           </li>
       
           <li>
               <p @click="addCartLists(detailInfo)">
                   加入购物车
               </p>
           </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations, mapGetters, mapState} from 'vuex'
export default {
    methods: {
        addCartLists (proInfo) {
            if (this.user.isLogin === false) {
              this.$router.push('/login')
              return false
            } else {
                const detailInfo = {
                id: proInfo.id,
                title: proInfo.title,
                price: proInfo.price,
                oldprice: proInfo.oldprice,
                count: 1,
                isChecked: false
                }
            this.addCart(detailInfo)
            }
        },
        ...mapMutations(['hideTabbar','addCart'])
    },
    computed: {
            ...mapGetters(['totalCount']),
            ...mapState(['user'])
    }
}
</script>

<style lang="scss" scoped>
.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
    background-color: #fff;
    margin-top: 10px;
	ul{
		width: 100%;
		li{
			width: 20%;
			float: left;
            text-align: center;
            border-right: 1px solid #e7e7e7;
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
        li:nth-child(3){
            width: 25%;
            p{
                height: 42px;
                line-height: 42px;
            }
           
        }
        li:nth-child(4){
            width: 35%;
            background: #ff464e;
           
            border-right: none;
            p{
                color: #fff;
                height: 42px;
                line-height: 42px;
            }
           
        }
	}

}

</style>


