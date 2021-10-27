<template>
  <div>
    <el-dialog title="增加" :visible.sync="dialogFlag" @close="handleClose" center>
      <dynamic-form @addLift="addLift"/>
    </el-dialog>
  </div>
</template>

<script>
import DynamicForm from "@/components/form/DynamicForm";
import {addLift} from "@/api/liftMange";
export default {
  name: "LiftAdd",
  components: {DynamicForm},
  data() {
    return {
      dialogFlag: false
    }
  },
  methods:{
    addLift(lift) {
      addLift(lift).then(()=>{
        this.handleClose();
        this.$emit('refreshTableData');
      })
    },
    handleClose() {
      this.$emit("update:flag", false);
    },
  },
  watch:{
    '$attrs.flag'(flag) {
      this.dialogFlag = flag;
    },
  }
}
</script>

<style scoped>

</style>