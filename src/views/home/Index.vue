<template>
  <div class="home">
    <NavBar class="home-bar">
      <template #center> supermarket </template>
    </NavBar>
    <div class="container">
      <HomeSwiper :banners="banners" class="home-swiper" />
      <RecommendView :recommends="recommends" />
      <el-scrollbar>
        <KeyCode :keywords="keywords" />
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import RecommendView from './childComp/Recommend.vue';
import HomeSwiper from './childComp/HomeSwiper.vue';
import KeyCode from './childComp/KeyCode.vue';

import { getHomeMultidata } from '@/network/home';
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    HomeSwiper,
    KeyCode
  },
  setup() {
    // const banners = ref([]);
    // const recommends = ref([]);
    // const getHomeData = async () => {
    //   const { data } = await getHomeMultidata();
    //   banners.value = data.banner.list;
    //   recommends.value = data.recommend.list;
    // };
    const states = reactive({
      banners: [],
      recommends: [],
      keywords: []
    });
    const getHomeData = async() => {
      const { data } = await getHomeMultidata();
      states.banners = data.banner.list;
      states.recommends = data.recommend.list;
      states.keywords = data.keywords.list;
      console.log('keywords: ', states.keywords);
      // console.log(states.banners);
      // console.log(states.recommends);
    };
    getHomeData();
    return {
      getHomeData,
      // banners,
      // recommends
      ...toRefs(states)
    };
  }
});
</script>

<style lang="scss" scoped>
.home {
  padding-top: 44px;
  /* vh视口 */
  height: 100vh;
  /* 第二种方法 */
  /* position: relative; */
}
.home-bar {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.home-swiper {
  // margin-top: 44px;
  z-index: 9;
  > img {
    width: 400px;
  }
}
.container {
  height: calc(100% - 44px);
  overflow: hidden;
  overflow-y: scroll;
}
</style>
