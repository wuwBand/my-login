<template>
  <div>
<!--    <H1>用户管理</H1>-->
    <el-table
      :data="tableData.slice((this.currPage-1)*this.pageSize , this.currPage*this.pageSize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "UserManager",
  data() {
    return {
      tableData: [],
      pageSize:5,
      currPage:1,
      currentPage4:0
    }
  },
  beforeMount() {

  },
  mounted() {
    this.$axios.get('/list',{
    }).then(response=>{
      console.log(response.data)
      this.tableData = response.data.dataList;
    })
    .catch(error=>{
      console.log(error)
    })

  },
  methods:{

    handleCurrentChange:function (cPage){
    console.log("改变页码"+cPage)
      this.currPage = cPage
    },
    handleSizeChange:function (val){
      console.log(`每页 ${val} 条`);
    },
    handleDelete:function ($index, row){
      // console.log($index)
      console.log(row.name)
    }
  }

}
</script>

<style scoped>

</style>
