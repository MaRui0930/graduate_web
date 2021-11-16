<template>
  <div>
    <div>
      前端可视化页面
      <div id="myChart" :style="{width:'300px',height:'300px'}"/>
      <BarChart/>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/chart/BarChart";
export default {
  name: "Visible",
  components: {BarChart},
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  },
  mounted() {
    this.drawLine();
  }
}
</script>

<style scoped>

</style>