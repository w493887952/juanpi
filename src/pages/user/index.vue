<template>
    <div>
        <Usertop/>
        <Tabbar/>
        <Order/>
        <Me/>
        <About/>
    </div>
</template>
<script>
import Tabbar from "@/pages/core/tabbar"
import Usertop from "@/pages/user/usertop"
import Order from "@/pages/user/order"
import Me from "@/pages/user/me"
import About from "@/pages/user/about"

export default {
      components: {
      Tabbar,
      Usertop,
      Order,
      Me,
      About
  }
}
</script>
<style lang="scss" scoped>

</style>

