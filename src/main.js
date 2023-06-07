import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// 三级联动组件——全局组件
import TypeNav from '@/pages/Home/TypeNav';
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
// 引入路由
import router from '@/router';
// 测试
import {reqCategoryList} from '@/api';
reqCategoryList();
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({

  render: h => h(App),
  // 注册路由：底下的写法KV一致，省略V【router的r小写的】
  router    //注册路由信息：当这里写入router的时候，组件身上都拥有$route$router属性
}).$mount('#app')
