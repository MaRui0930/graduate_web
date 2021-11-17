<template>
  <div>
    <div>
      前端可视化页面
      <BarChart/>
      <PieChart/>
      <LineChart/>
      <RadarChart/>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/chart/BarChart";
import PieChart from "@/components/chart/PieChart";
import LineChart from "@/components/chart/LineChart";
import RadarChart from "@/components/chart/RadarChart";

export default {
  name: "Visible",
  components: {RadarChart, LineChart, PieChart, BarChart},
}
</script>

<style scoped>

</style>