<template>
  <TabBar>
    <TabBarItem path="/home">
      <!-- 使用别名，但是在图片img时需要添加上~ -->
      <template #item-icon>
        <img src="~@/assets/img/tabbar/home.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/category.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/cart.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/cart_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/about">
      <template #item-icon>
        <img src="~@/assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>
<script>
// 使用的是别名定义的文件路径
import TabBar from '@/components/tabbar/TabBar.vue';
import TabBarItem from '@/components/tabbar/TabBarItem.vue';
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>
