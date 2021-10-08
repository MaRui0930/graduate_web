let refreshTableData={
    methods:{
        //刷新table数据
        refreshTableData() {
            this.$refs.userTable.refreshData();
        },
        //带参数刷新table数据
        paramsLoadData(requestData) {
            this.$refs.userTable.paramsLoadData(requestData);
        }
    }
}
export default refreshTableData;