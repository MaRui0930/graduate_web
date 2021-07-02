<template>
  <!--之前的颜色#409EFF-->
  <el-header style="line-height: 60px;background-color: deepskyblue;color: white">
    <el-row>
      <el-col :span="5"><span>数据可视化平台</span></el-col>
    </el-row>
  </el-header>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "HeaderLayout",
  data() {
    return {
      userDetail: {},
      ruleForm: {
        pass: '',
        checkPass: '',
      }
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['getPortraitUrl', 'getUsername']),
  }
}
</script>

<style scoped>
.link {
  font-size: 20px;
  line-height: 40px;
}

.userDetail {
  text-align: left;
  font-size: 15px;
  line-height: 30px;
}
</style>