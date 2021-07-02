<template>
    <el-aside style="width: 200px;background-color:#545c64;overflow: hidden">
      <el-menu @select="select" unique-opened router :default-active="$store.state.defaultIndex"
               background-color="#545c64"
               text-color="#fff">
        <template v-for="(item,index) in $router.options.routes">
          <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
            <!--一级菜单-->
            <template slot="title">
              <span slot="title">{{ item.meta.name }}</span>
            </template>
            <!--子级菜单-->
            <el-menu-item v-for="subMenu in item.children" :key="subMenu.id" :index="subMenu.path">
              {{ subMenu.meta.name }}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  name: "NavLayout",
  methods:{
    select(index) {
      this.$store.commit('SET_DEFAULT_INDEX', index)
    },
  }
}
</script>

<style scoped>

</style>