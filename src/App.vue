<template>
  <div class="wrapper">
    <MainTabBar />
    <!-- <Layout /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { IUseTodo, useTodo } from './hooks/index';

import MainTabBar from '@/components/mainTabBar/Index.vue';
// import Layout from '@/components/layout/Index.vue';
export default defineComponent({
  name: 'App',
  components: {
    MainTabBar
    // Layout
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    onMounted(() => {
      setTimeout(() => {
        setTodoList();
      }, 1000);
    });
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.wrapper {
  // background-color: #eee;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
</style>
