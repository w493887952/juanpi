<template>
  <div>
     <Headad/>
     <router-link tag="div" to="/Keywords">
     <search/>
     </router-link>
     <Slider :swiperList="swiperList"/>
     <Nav/>
     <Activity :activityleft="activityleft" :activityright="activityright"/>
     <Ad :ada="ada"/>
     <Choiceness :adb="adb" :choicenessleft="choicenessleft" :choicenessright="choicenessright"/>
     <Tabbar/>

  </div>
</template>

<script>
import axios from 'axios'

import Headad from "@/pages/core/headad"
import Search from "@/pages/home/search"
import Slider from "@/pages/home/slider"
import Nav from "@/pages/home/nav"
import Activity from "@/pages/home/activity"
import Ad from "@/pages/home/ad"
import Choiceness from "@/pages/home/choiceness"
import Tabbar from "@/pages/core/tabbar"
export default {
  name: 'home',
  components: {
      Headad,
      Search,
      Slider,
      Nav,
      Activity,
      Ad,
      Choiceness,
     Tabbar
      
  },
  data() {
     return{
        swiperList: [],
        activityleft: [],
        activityright: [],
        ada: [],
        adb: [],
        choicenessleft: [],
        choicenessright: []
     }
  },
    methods: {
      getHomeInfo () {
        axios.get('/static/mock/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.activityleft = data.activityleft
          this.activityright = data.activityright
          this.ada = data.ada
          this.adb = data.adb
          this.choicenessleft = data.choicenessleft
          this.choicenessright = data.choicenessright
        }
      }
    },

    mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>