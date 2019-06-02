<template>
    <div class="special">
        <p>距离结束还剩</p>
        <div class="time">
            <span>-</span>
            <span>{{day}}</span>天
            <span>{{hr}}</span>时
            <span>{{min}}</span>分
            <span>{{sec}}</span>秒
            <span>-</span>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            day: 0,
            hr: 0,
            min: 0,
            sec: 0
        }
    },
    mounted: function () {
      this.countdown()
     
    },

    methods: {
      countdown: function () {
           const end = Date.parse(new Date('2020-04-27'))
            const now = Date.parse(new Date())
            const msec = end - now
            let day = parseInt(msec / 1000 / 60 / 60 / 24)
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            this.day = day
            this.hr = hr > 9 ? hr : '0' + hr
            this.min = min > 9 ? min : '0' + min
            this.sec = sec > 9 ? sec : '0' + sec
            const that = this
            setTimeout(function () {
                that.countdown()
            }, 1000)
      },
      
    },
    
    
}
</script>
<style lang="scss" scoped>
    .special{
        text-align: center;
        background: #f3f3f3;
        padding: 12px;
        .time{
         margin-top: 5px;
         span{
             font-weight: bold;
         }
        }
    }
</style>
