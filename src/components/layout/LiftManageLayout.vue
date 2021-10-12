<template>
  <div>
    <el-row>
      <el-col :offset="18" :span="6">
        <el-button-group>
          <el-button @click="query"> 查询</el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LiftManageLayout",
  methods:{
    query() {
      this.$emit('query');
    }
  }
}
</script>

<style scoped>

</style>
