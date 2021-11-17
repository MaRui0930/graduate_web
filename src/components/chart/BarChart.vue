<template>
  <!--电梯状态柱状图-->
  <div :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts'
import {getLiftState} from "@/api/visible";

export default {
  name: "BarChart",
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
      chart: null,
    }
  },
  mounted() {
    getLiftState().then(res=>{
      const {num,states}= res.data;
      this.$nextTick(() => {
        this.initChart({num,states})
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
    initChart({num,states}) {
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: states,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          data: num
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>