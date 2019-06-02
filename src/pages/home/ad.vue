<template>
   <div class="ad">
       <div  class="ada" v-for="item in ada" :key="item.id">
            <router-link to="special">
              <img :src="item.imgUrl" alt="">
           </router-link>
       </div>
   
       </div>
</template>
<script>
export default {
    props: {
        ada: Array
    },
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
.ad{
    img{    
        width: 100%;
    }
}
</style>
