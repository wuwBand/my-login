<template>
  <el-row :gutter="21">
    <el-col :span="7"><img src="../../assets/12306log.jpg"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple ind"> <el-input placeholder="搜索车票/餐饮/常旅客/相关规章" v-model="inpuit" @blur="validateCounts">
    </el-input>  <el-button type="primary" size="mini" icon="el-icon-search"></el-button></div></el-col>
    <el-col :span="7">
      <el-dropdown>
      <span class="el-dropdown-link">
        选择语言<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >English</el-dropdown-item>
        <el-dropdown-item >简体中文</el-dropdown-item>
        <el-dropdown-item >日本语</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      <el-dropdown>
      <span class="el-dropdown-link">
        我的12306<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >火车票信息</el-dropdown-item>
          <el-dropdown-item >候补订单</el-dropdown-item>
          <el-dropdown-item >查看个人信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

        <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/login' }">注册</el-breadcrumb-item>

      <div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Top",
  data:()=>{
    return {
      inpuit:""
    }
  }

}
</script>

<style scoped>
.ind{
  display: flex;
}
</style>
