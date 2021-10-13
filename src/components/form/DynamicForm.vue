<template>
  <div>
    <component v-for="(item,number) in formConfig"
               :key="item.name" :is="item.type"
               :item="item" :number="number"
               @changeComponent="changeComponentHandle"/>
  </div>
</template>

<script>
import {getLiftAddForm} from "@/api/formConf";
import InputComponent from "@/components/form/InputComponent";
import SelectComponent from "@/components/form/SelectComponent";

export default {
  name: "DynamicForm",
  components: {
    input_component: InputComponent,
    select_component: SelectComponent
  },
  data() {
    return {
      formConfig: [],
      submitData: {}
    }
  },
  created() {
    this.initForm();
  },
  methods: {
    initForm() {
      getLiftAddForm().then(res => {
        this.formConfig = res.data;
      })
    },
    changeComponentHandle(paramsObj) {
      const {number, value} = paramsObj;
      const {formConfig} =this
      const key=formConfig[number].name
      this.$set(this.submitData, key, value);
    }
  }
}
</script>

<style scoped>

</style>