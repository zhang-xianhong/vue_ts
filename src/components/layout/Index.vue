<template>
    <div class="layout">
        <header class="layout-head">
            <NavBar>
                <template #center> Shine </template>
            </NavBar>
        </header>
        <main class="layout-main">
            <aside class="layout-sidebar">
                <SideBar>
                </SideBar>
            </aside>
            <div class="layout-container">
                <el-scrollbar>
                  <BlankHeader />
                    <div class="layout-viewport">
                        <router-view />
                    </div>
                </el-scrollbar>
            </div>
        </main>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../navbar/NavBar.vue';
import SideBar from '../sideBar/Index.vue';
import BlankHeader from '../blank-header/Index.vue';
export default defineComponent({
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    BlankHeader
  }
});
</script>
<style lang="scss">
@import './src/styles/layout';

.layout {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-flow: column;
  background-color: #f2f2f2;
  &-head {
    height: 50px;
    flex-shrink: 0;
    background-color: #262f3e;
  }
  &-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  &-sidebar {
    width: 210px;
    flex-shrink: 0;
    background-color: #1e222d;
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: $routerHoverBgcolor !important;
    }
    .el-submenu__title:focus,
    .el-submenu__title:hover {
      background-color: $routerHoverBgcolor !important;
    }
    .el-menu-item.is-active {
      color: $routerActiveColor !important;
      background-color: $routerActiveBgcolor !important;
    }
    .el-menu-item * {
      user-select: none;
    }
    .el-submenu__title {
      user-select: none;
    }
  }
  &-container {
    flex: 1;
    overflow: hidden;
  }
  &-viewport {
    margin: 20px;
  }

  .el-menu {
    background: transparent;
    border-right: none;
  }
}
</style>
