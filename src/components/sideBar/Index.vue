<template>
  <keep-alive>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :background-color="menuVariables.menuBg"
        :text-color="menuVariables.menuText"
        :unique-opened="false"
        :active-text-color="menuVariables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        router
        :default-active="activeMenu"
      >
        <el-submenu :index="link">
          <template #title>
            <i class="el-icon-s-custom"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item :index="link">
              <i class="el-icon-plus"></i>
              <template #title>用户申请</template>
              </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>
              <i class="el-icon-film"></i>
              <span>用户审核</span>
            </template>
            <el-menu-item :index="link2">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="status-manage">
          <i class="el-icon-menu"></i>
          <template #title>状态管理</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-submenu index="4">
            <template #title>
              <i class="el-icon-setting"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item :index="article">
              <i class="el-icon-document"></i>
              <template #title>实验</template>
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance, reactive, toRefs } from 'vue';
// import menuVariables from '@/styles/menu.scss';
// 引入scss文件，需要配置文件，这里配置瓴type-css.d.ts文件，并在tsconfig.json文件中设置
import menuVariables from '@/styles/menu.scss';

interface IUserRoutes {
  link: string,
  link1: string,
  link2: string
}
export default defineComponent({
  name: 'SideBar',
  components: {
  },
  setup() {
    const isCollapse = computed(() => false);
    const userRoutes: IUserRoutes = reactive({
      link: 'users-apply',
      link1: 'users-add',
      link2: 'users-review'
    });
    const articleRoutes = reactive({
      article: 'article'
    });
    // eslint-disable-next-line
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const activeMenu = computed(() => {
      // eslint-disable-next-line
      // @ts-ignore
      const route = proxy.$route;
      const { meta, path } = route;
      console.log('meta', meta);
      console.log('path', path);
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    return {
      isCollapse,
      activeMenu,
      menuVariables,
      ...toRefs(userRoutes),
      ...toRefs(articleRoutes)
    };
  }
});
</script>

<style lang="scss">
@import './src/styles/layout';
.side-bar {
  width: 100%;
  height: 100%;
  li {
    text-align: left !important;
  }
  .el-scrollbar {
    height: calc(100vh - #{$navBarHeight}) !important;
  }
}
</style>
