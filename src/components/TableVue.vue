<template>
  <div>
    <el-table @selection-change="handleSelectionChange" stripe border :data="tableData" tooltip-effect="dark"
              :highlight-current-row="true" style="width: 100%" size="small">
      <!--多选框-->
      <el-table-column align="center" v-if="tableConfig.selection" type="selection" width="55"></el-table-column>
      <template v-for="item in tableConfig.tHead">
        <!--插槽-->
        <el-table-column :key="item.field" :prop="item.field" :label="item.label" :width="item.width" align="center"
                         v-if="item.columnType === 'slot'">
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!--扩展数据-->
        <el-table-column :key="item.field" :label="item.label" :width="item.width" type="expand" align="center"
                         v-else-if="item.columnType === 'expand'">
          <template slot-scope="scope">
            <el-form v-if="scope.row[getObjProp]!=null" label-position="left">
              <template v-for="(expand,index) in item.expands">
                <el-form-item :key="index" :label="Object.values(expand).toString()">
                  {{ getObjProp?scope.row[getObjProp][Object.keys(expand).toString()]:scope.row[Object.keys(expand).toString()]}}
                </el-form-item>
              </template>
            </el-form>
          </template>
        </el-table-column>
        <!--文本数据-->
        <el-table-column
            :key="item.field"
            :prop="item.field"
            :label="item.label"
            :width="item.width"
            align="center"
            v-else
        ></el-table-column>
      </template>
    </el-table>
    <el-pagination
        v-if="tableData.length>0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="len"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "TableVue",
  data() {
    return {
      tableConfig: {
        tHead: [],
        selection: false,
        objPath: null,
        requestData: {},
      },
      //分页数据
      total: 0,
      len: 20,
      start: 1,

      tableData: []
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    initTableConfig() {
      let configData = this.config;
      let keys = Object.keys(this.tableConfig);
      for (let key in configData) {
        if (keys.includes(key)) {
          this.tableConfig[key] = configData[key];
        }
      }
    },
    // 带参数刷新数据
    paramsLoadData(requestData) {
      this.tableConfig.requestData = requestData;
      this.$getRequest(requestData.url, requestData.data).then(res => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      })
    },

    //无参数刷新
    refreshData() {
      this.$getRequest(this.tableConfig.requestData.url, this.tableConfig.requestData.data).then(res => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      })
    },

    handleCurrentChange(pageNum) {
      this.tableConfig.requestData.data.start = (pageNum - 1) * this.len;
      this.refreshData()
    },

    handleSizeChange(len) {
      this.tableConfig.requestData.data.len = len;
      this.len = len;
      this.refreshData();
    },

    //触发多选框更新
    handleSelectionChange(val) {
      this.$emit('update:tableRow', val);
    }
  },
  beforeMount() {
    this.initTableConfig();
  },
  computed:{
    getObjProp() {
        return this.tableConfig.objPath;
    }
  }
}
</script>

<style scoped>

</style>
