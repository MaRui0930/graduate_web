<template>
  <div>
    <el-divider content-position="left">工单管理</el-divider>
    <WorkOrderLayout @query="query"></WorkOrderLayout>
    <br>
    <TableVue ref="userTable" :config="configTable">
      <template v-slot:operation="slotData">
        <el-select @change="changeState(slotData.data,$event)" :value="slotData.data.workOrderState" placeholder="请选择">
          <el-option v-for="item in states" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </TableVue>
  </div>
</template>

<script>
import TableVue from "@/components/TableVue";
import WorkOrderLayout from "@/components/layout/WorkOrderLayout";
import refreshTableData from "@/mixin/refreshTableData";
import {changeState} from "@/api/workOrder";

export default {
  name: "OrderManage",
  components: {WorkOrderLayout, TableVue},
  mixins: [refreshTableData],
  data() {
    return{
      configTable: {
        tHead: [
          {
            label: '电梯ID',
            field: 'liftId'
          },
          {
            label: '工单开始时间',
            field: 'workOrderStart'
          },
          {
            label: '工单结束时间',
            field: 'workOrderEnd'
          },
          {
            label: '工单状态',
            field: 'workOrderState'
          },
          {
            label: "工单状态",
            columnType: "slot",
            slotName: "operation"
          },
          /*{
            label: "操作",
            columnType: "slot",
            slotName: "operation"
          },
          {
            label: "更多",
            columnType: "expand",
            expands: [
              {createTime: '创建时间:'},
              {deviceType: '设备类型:'},
              {id: '设备id:'}
            ]
          }*/
        ],
        requestData: {
          url: "/workOrder/getAll",
          data: {
            start: 0,
            len: 10
          }
        }
      },
      states:[
          {label:"已创建", value: 0},
          {label:"已响应", value: 1},
          {label:"已解决", value: 2},
          {label:"已回访", value: 3},
          {label:"已完结", value: 4},
      ]
    }
  },
  methods:{
    query() {
      const requestData = {
        url: '/workOrder/getAll',
        data: {}
      };
      this.paramsLoadData(requestData);
    },
    changeState(slotData,workOrderState) {
      const {id,liftId}=slotData
      changeState(id,liftId,workOrderState).then(()=>{
        this.refreshTableData();
      })
    }
  }
}
</script>

<style scoped>

</style>
