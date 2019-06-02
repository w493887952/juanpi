<template>
    <div class="article">
         <article-Swiper :swiperImg="swiperImg"></article-Swiper>
         <price :shangpin="shangpin"></price>
         <article-activity></article-activity>
         <article-model/>
         <articlefotter :dianpu="dianpu"/>
         <article-tab/>
    </div>
</template>
<script>
import axios from 'axios'

import ArticleSwiper from "./articleswiper"
import price from "./price"
import articleActivity from "./articleActivity"
import articleModel from "./articleModel"
import articlefotter from "./articlefotter"
import articleTab from "./articleTab"

export default {
    components:{
       ArticleSwiper,
       price,
       articleActivity,
       articleModel,
       articlefotter,
       articleTab,
    },
    data () {
        
        return{
            swiperImg: [],
            shangpin: [],
            dianpu: []
        }
    },
    methods: {
        getarticle() {
           axios.get('/static/mock/merchandise.json')   
           .then(this.getarticledata)
        },
        getarticledata (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.swiperImg = data.swiperImg
                this.shangpin = data.shangpin
                this.dianpu = data.dianpu
            }
        }
    },
    mounted () {
        this.getarticle()
    }
}
</script>
<style lang="scss" scoped>

</style>
