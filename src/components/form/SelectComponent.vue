<template>
  <div v-if="item">
    {{item.title}}
    <el-select v-model="value" :placeholder="item.placeholder">
      <el-option v-for="option in item.options"
                 :key="option.value"
                 :label="option.label"
                 :value="option.value"/>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => null
    },
    number: {
      type: Number,
      required: true,
    }
  },
  data() {
    return{
      value: null
    }
  },
  watch:{
    value(v) {
      this.$emit('changeComponent',{
        number: this.number,
        value: v
      })
    }
  }
}
</script>

<style scoped>

</style>