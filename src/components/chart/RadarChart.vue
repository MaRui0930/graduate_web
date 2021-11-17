<template>
  <div :style="{height:height,width:width}"/>

</template>

<script>
import * as echarts from 'echarts'
import {getFaultType} from "@/api/visible";

export default {
  name: "RadarChart",
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    getFaultType().then(res=>{
      const {indicators,value} = res.data;
      this.$nextTick(() => {
        this.initChart({indicators,value})
      })
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart({indicators,value}) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: indicators
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['类型故障数量',]
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: value,
              name: '类型故障数量'
            }
          ],
          animationDuration: 3000
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>