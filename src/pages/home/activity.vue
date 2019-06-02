<template>
    <div class="ada">
       <router-link class="activity"  to="special" tag="div">
          <div class="left" v-for="item in activityleft" :key="item.id">
              <img :src="item.imgUrl" alt="">
          </div>
          <div class="right" >
              <ul>
                  <li v-for="item in activityright" :key="item.id">
                      <img :src="item.imgUrl" alt="">
                  </li>
              </ul>
          </div>
       </router-link>
    
    </div>
</template>
<script>
export default {
    name: 'activity',
    props: {
        activityleft: Array,
        activityright: Array
    },

}
</script>
<style lang="scss" scoped>
.ada{
    .activity{
        width: 100%;
        display: flex;
      
        .left{
            width: 50%;
            
            img{
                width: 100%;
            }
        }
        .right{
            width: 50%;
            height: 207px;
            ul{
                li{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
    .ad{
        img{
            width: 100%;
        }
    }
}
</style>
