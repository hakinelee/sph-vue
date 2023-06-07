<!-- eslint-disable -->
<template>
  <div>
    我是搜索
    <br>
    <h1>params参数{{ $route.params.keyword }}</h1>
    <h1>query参数{{ $route.query.k }}</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "",
  props: [],
  setup(props, ctx) {
    return {};
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>