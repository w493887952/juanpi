<template>
    <div class="login">
        <Headad/>
        <Logintop/>
        <Centre/>
        <Bottom/>
     

    </div>
</template>
<script>
import Headad from "@/pages/core/headad"
import Logintop from "@/pages/login/logintop"
import Centre from "@/pages/login/centre"
import Bottom from "@/pages/login/bottom"

export default {
      components: {
      Headad,
      Logintop,
      Centre,
      Bottom
  },
  data(){
      return{
         
      }
  }
}
</script>
<style lang="scss" scoped>
</style>

