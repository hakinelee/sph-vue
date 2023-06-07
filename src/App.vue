<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登陆、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header';
import Footer from './components/Footer';

// 注册
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>