<template>
  <div>
    <el-dialog title="电梯详情" width="40%" :visible.sync="dialogFlag" @close="handleClose" center>
      <el-form :model="liftInfoForm">
        <el-form-item label="电梯id:" label-width="120px">
          {{liftInfoForm.id}}
        </el-form-item>
        <el-form-item label="故障类型:" label-width="120px">
          {{liftInfoForm.faultType}}
        </el-form-item>
        <el-form-item label="故障开始时间:" label-width="120px">
          {{liftInfoForm.faultStart}}
        </el-form-item>
        <el-form-item label="故障结束时间:" label-width="120px">
          {{liftInfoForm.faultEnd}}
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LiftInfo",
  props:{
    liftInfoForm:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      dialogFlag: false,
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:flag", false);
    },
  },
  watch: {
    '$attrs.flag'(flag) {
      console.log(flag)
      this.dialogFlag = flag;
    },
  }
}
</script>

<style scoped>

</style>