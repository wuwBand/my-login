// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false

import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios";
Vue.use(router);
Vue.use(ElementUI);

Vue.prototype.$axios = Axios   //定义全局变量
Axios.defaults.baseURL='api'  //定义基本路径
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) //ElementUI
})
