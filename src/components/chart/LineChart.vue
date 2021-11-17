<template>
  <div :style="{height:height,width:width}"/>
</template>

<script>
import {getLifeDistribute} from "@/api/visible";
import * as echarts from 'echarts'

export default {
  name: "LineChart",
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  mounted() {
    getLifeDistribute().then(res => {
      const {life, num} = res.data;
      this.$nextTick(() => {
        this.initChart({life, num})
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
  data() {
    return {
      chart: null
    }
  },
  methods: {
    initChart({life, num}) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        xAxis: {
          data: life,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        series: [{
          name: '电梯数量',
          smooth: true,
          type: 'line',
          data: num,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        ]
      })
    },
  }
}
</script>

<style scoped>

</style>