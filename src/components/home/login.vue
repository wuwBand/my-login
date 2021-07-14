<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h1 class="login-title">欢迎登录</h1>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        <el-button type="primary" v-on:click="onToReg()">注册</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
     <span slot="footer" class="dialog-footer">
       <el-button type="primary" @click="dialogVisible = false">确定</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      form: {
        username:'',
        password:''
      },
    //表单验证，需要在el-from-item 元素中增加prop属性
      rules:{
        username: [
          {required: true, message: '账号不可为空',trigger: 'blue'}
        ],
        password: [
          {required: true, message: '密码不可为空',trigger: 'blue'}
        ]
      },
      //对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onSubmit(formName) {
      //为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/login',{
            // "action":'login',
            "userName":this.form.username,
            "passWord":this.form.password
          }).then(response =>{
            console.log(response.data)
          if (response.data.code === 200){
            this.$message({
              message: '恭喜，登录成功',
              type: 'success'
            });
            this.$router.replace("/userM")
          }else {
            this.$message({
              showClose: true,
              message: '账号或密码错误',
              type: 'error'
            });
            return false;
          }

          }).catch(error=>{
            console.log(error)
          })
          //使用vue-router 路由到指定页面
          // this.$router.push("/index")
          // this.$router.replace("/index")
        }else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
    onToReg() {
      //为表单绑定验证功能
      this.$router.push("/register")
    },
    handleClose(){

    },

  }
}
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius : 5px;
    -moz-border-radius : 5px;
    box-shadow:0 0 25px #909399;
    }
  .login-title{
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }

</style>
