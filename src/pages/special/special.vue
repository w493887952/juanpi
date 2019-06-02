<template>
    <div class="special">
        <Special-top></Special-top>
        <Special-time></Special-time>
        <Special-content></Special-content>

    </div>
</template>


<script>
import SpecialTop from "@/pages/special/specialTop"
import SpecialTime from "@/pages/special/specialTime"
import SpecialContent from "@/pages/special/specialContent"


export default {
    components: {
      SpecialTime,
      SpecialTop,
      SpecialContent,

    }
}
</script>
<style lang="scss" scoped>

</style>
