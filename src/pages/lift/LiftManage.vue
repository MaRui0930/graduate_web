<template>
  <div>
    <el-divider content-position="left">电梯管理</el-divider>
    <LiftManageLayout :flag.sync="isAdd" @query="query"/>
    <br>
    <TableVue ref="userTable" :config="configTable">
      <template v-slot:operation="slotData">
        <el-button v-if="slotData.data.liftState ==='发生故障'" size="small" type="success" @click="show(slotData.data)">
          详情
        </el-button>
      </template>
    </TableVue>
    <LiftAdd @refreshTableData="refreshTableData" :flag.sync="isAdd"/>
    <LiftInfo :liftInfoForm="liftInfoForm" :flag.sync="isInfo"/>
  </div>
</template>

<script>
import TableVue from "@/components/TableVue";
import refreshTableData from "@/mixin/refreshTableData";
import LiftManageLayout from "@/components/layout/LiftManageLayout";
import LiftAdd from "@/components/dialog/LiftAdd";
import LiftInfo from "@/components/dialog/LiftInfo";
import {getLiftInfo} from "@/api/liftMange";


export default {
  name: "LiftManage",
  components: {LiftInfo, LiftAdd, LiftManageLayout, TableVue},
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
            label: "操作",
            columnType: "slot",
            slotName: "operation"
          },
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
      liftInfoForm: {},
      isAdd: false,
      isInfo: false
    }
  },
  methods: {
    query() {
      const requestData = {
        url: '/liftManage/getAll',
        data: {}
      };
      this.paramsLoadData(requestData);
    },
    show(data) {
      getLiftInfo(data.id).then(res => {
        this.liftInfoForm = res.data;
      })
      this.isInfo = true;
    }
  }
}
</script>

<style scoped>

</style>