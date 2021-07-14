<template>
  <div>
  <div>
    <Top></Top>
  </div>
    <div>
      <NavMenu></NavMenu>
    </div>
    <div><Play></Play></div>
  <div>
    <h1>首页</h1>
    <router-link to="login" replace>登录</router-link>
    <router-link to="register">注册</router-link>
  </div>
  </div>
</template>

<script>
  import Top from "../12306/Top";
  import NavMenu from "../12306/NavMenu";
  import Play from "../12306/Play";
  export default {
    name: "Home",
    components: {
      Top:Top,
      NavMenu:NavMenu,
      Play:Play
    },
  }
</script>

<style scoped>

</style>
