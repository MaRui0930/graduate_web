<template>
  <el-container direction="vertical">
    <HeaderLayout/>
    <el-container style="height: calc(100vh - 80px)">
      <NavLayout/>
      <el-main>
        <!--此处为Router-View渲染视图-->
        <MainLayout></MainLayout>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainLayout from "@/views/layout/components/MainLayout";
import NavLayout from "@/views/layout/components/NavLayout";
import HeaderLayout from "@/views/layout/components/HeaderLayout";

export default {
  name: "index",
  components: {HeaderLayout, NavLayout, MainLayout}
}
</script>

<style scoped>

</style>