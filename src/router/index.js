import Vue from "vue";
import Router from 'vue-router';
import Main from '../views/Main';
import Login from '../components/home/login';
import Register from '../components/home/register';
import Index from '../views/Index';
import Home from "../components/home/Home";
import AdminIndex from "../components/home/AdminIndex";
Vue.use(Router);

export default new Router({
  // mode:"history",
  mode:"hash",
  routes:[
    {
      path: '/main',
      component: Main
    },
    {
      path: '/login',name:'login',
      component: Login
    },
    {
      path: '/register',name: 'register',
      component: Register
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/', name:'Home',component:Home
    },
    {
      path: '/adminIndex', name:'adminIndex',component:AdminIndex,
      children:[{ path: '/userM', name:'userM',component:()=> import('../components/home/UserManager')}]
    }
  ]
});
