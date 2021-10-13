<template>
  <div>
    <el-divider content-position="left">电梯管理</el-divider>
    <LiftManageLayout @query="query"/>
    <br>
    <TableVue ref="userTable" :config="configTable">

    </TableVue>
    <DynamicForm/>
  </div>
</template>

<script>
import TableVue from "@/components/TableVue";
import refreshTableData from "@/mixin/refreshTableData";
import LiftManageLayout from "@/components/layout/LiftManageLayout";
import DynamicForm from "@/components/form/DynamicForm";

export default {
  name: "LiftManage",
  components: {DynamicForm, LiftManageLayout, TableVue},
  mixins: [refreshTableData],
  data() {
    return {
      configTable: {
        tHead: [
          {
            label: '电梯ID',
            field: 'id'
          },
          {
            label: '品牌',
            field: 'brand'
          },
          {
            label: '电梯状态',
            field: 'liftState'
          },
          {
            label: '电梯类型',
            field: 'liftType'
          },
          {
            label: '年限',
            field: 'life'
          },
          {
            label: '地区',
            field: 'area'
          },
          {
            label: '地址',
            field: 'address'
          },
          {
            label: "更多",
            columnType: "expand",
            expands: [
              {faultType: '故障类型:'},
              {faultStart: '故障开始时间:'},
              {faultEnd: '故障结束时间:'}
            ]
          }
        ],
        objPath: 'liftInfo',
        requestData: {
          url: "/liftManage/getAll",
          data: {
            start: 0,
            len: 10
          }
        }
      },
      test:{}
    }
  },
  methods: {
    query() {
      const requestData = {
        url: '/liftManage/getAll',
        data: {}
      };
      this.paramsLoadData(requestData);
      this.$set(this.test,'name','marui')
      this.$set(this.test, 'age', 123);
    },
  }
}
</script>

<style scoped>

</style>