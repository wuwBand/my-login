<template>
<div>
  <h1>后台管理主页</h1>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">
      <Menu></Menu>
    </div></el-col>
    <el-col :span="18"><div class="grid-content bg-purple">
      <router-view></router-view>
    </div></el-col>
  </el-row>

</div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "AdminIndex",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),

    }
  },
  components:{
    Menu:Menu
  }

}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
 /* &:last-child {*/
 /*  margin-bottom: 0;*/
 /*}*/
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
