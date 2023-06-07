<!-- eslint-disable -->
<template>
  <div>
    <!-- 三级联动的全局组件，三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import { reactive } from "vue";
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
// 注册
export default {
  name: '',
  props: [],
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  setup(props, ctx) {
    return {};
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>