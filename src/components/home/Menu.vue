<template>
  <el-menu
    router :default-active="this.$route.path"
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/userM">用户列表</el-menu-item>
      <el-menu-item index="1-2">增加用户</el-menu-item>

    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>菜单</span>
      </template>
      <el-menu-item index="2-1">用户列表</el-menu-item>
      <el-menu-item index="2-2">增加用户</el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
