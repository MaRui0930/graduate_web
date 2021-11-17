<template>
  <div :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts'
import {getAllBrandOptions} from "@/api/visible";

export default {
  name: "PieChart",
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
    getAllBrandOptions().then(res => {
      const data = res.data;
      this.$nextTick(() => {
        this.initChart(data)
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
    initChart(dataArr) {
      let arr = [];
      dataArr.forEach(obj => {
        arr.push(obj.name)
      })
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: arr
        },
        series: [
          {
            name: '电梯品牌',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: dataArr,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>