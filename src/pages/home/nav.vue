<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="special">
                    <img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="special">
                    <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="special">
                    <img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="special">
                    <img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
.nav{
    overflow: hidden;
     ul{
         width: 100%;
         
         li{
             float: left;
             width: 25%;
             img{
                 width: 100%;
                 text-align: center;
                 }
         }
     }
}
</style>
