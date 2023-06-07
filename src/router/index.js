// 配置路由的地方
// 首先引入vue和vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
// 1. 第一个参数：告诉原来push方法，你往那里跳转，以及传递那些参数
// 2. 第二个参数：成功的回调
// 3. 第三个参数：失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call||apply区别：
        // 相同点：都可以调用函数一次，都可以修改函数的上下文一次
        // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        // call||apply区别：
        // 相同点：都可以调用函数一次，都可以修改函数的上下文一次
        // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
// 配置路由
export default new VueRouter({
    // 配置路由 //特别注意这里是routes（路由），而routers(路由器们)
    routes: [       //数组内部装载的是每一个路由
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/search/:keyword",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: "/home"
        }
    ]
})
