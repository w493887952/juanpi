<template>
    <div class="model">
    <mt-button @click.native="handleClick" class="cc">请选择：颜色、尺码</mt-button>
        <mt-popup v-model="popupVisible" position="bottom" class="choose">
            <div  class="css">
               对对对
                
            </div>
        </mt-popup>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg:'组件',
      popupVisible:false,
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    handleClick: function() {
        this.popupVisible = true
        }
    }
}
</script>

<style lang="scss" scoped>
.model{
    .cc{
        color: #333;
        font-size: 15px;
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 15px;
        border-bottom: 5px solid #f3f3f3;
    }
    .choose{ 
        width: 100%;
        height: 50%;
        span{
            display: block;
        width: 100%;
        }
        
    }
}

</style>



