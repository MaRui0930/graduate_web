<template>
  <div v-if="item">
    {{item.title}}
    <el-input v-model="value" :placeholder="item.placeholder"/>
  </div>
</template>

<script>
export default {
  name: "InputCompoent",
  props:{
    item:{
      type:Object,
      required: true,
      default: () => null
    },
    number:{
      type:Number,
      required: true
    }
  },
  data() {
    return{
      value: null
    }
  },
  watch:{
    value(v){
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