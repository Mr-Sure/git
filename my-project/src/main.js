
/* -- 导入核心模块 -- */
import Vue from 'vue';
import vueRouter from 'vue-router';
import $ from 'jquery';
import App from './App';
console.log($)
/* -- 新建主界面实例 -- */
new Vue({
  el: 'body',
  components: { App }
});
/* -- 引入路由并完成配置 -- */
Vue.use(vueRouter);
var router = new vueRouter({abstract:true});//WebAPP url场景模式，url不变
router.map({
  '/router': {
    component: function (resolve) {
      require(['./components/router'], resolve)
    }
  },
  '/hello': {
    component: function (resolve) {
      require(['./components/hello'], resolve)
    }
  }
});//路由全局map
router.start(App, '#app');//启动路由
