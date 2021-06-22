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
        <GoodsList :show-goods="showGoods" />
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, toRefs } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import RecommendView from './childComp/Recommend.vue';
import HomeSwiper from './childComp/HomeSwiper.vue';
import KeyCode from './childComp/KeyCode.vue';
import GoodsList from '@/components/goods/GoodsList.vue';

import { getHomeMultidata, getHomeGoods } from '@/network/home';
// import { TYPES } from "./typing";
enum TYPES {
    'POP' = 'pop',
    'NEW' = 'new',
    'SELL' = 'sell',
}
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    HomeSwiper,
    KeyCode,
    GoodsList
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
    const goodsState = reactive({
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    });

    const showGoods = computed(() => {
      return goodsState.pop.list;
    });

    const getHomeData = async() => {
      const { data } = await getHomeMultidata();
      states.banners = data.banner.list;
      states.recommends = data.recommend.list;
      states.keywords = data.keywords.list;
      // console.log('keywords: ', states.keywords);
      // console.log(states.banners);
      // console.log(states.recommends);
    };
    getHomeData();

    const getGoods = async(type: TYPES) => {
      const page: number = goodsState[type].page + 1;
      // const page: number = goodsState['pop'].page + 1;
      const { data } = await getHomeGoods(type, page);
      // console.log('Goods: ', data);
      const list: [] = data.list;
      goodsState[type].list.push(...list);
      // console.log('GoodsList: ', goodsState[type].list);
      // goodsState[type].page += 1;
    };
    getGoods(TYPES.POP);
    // getGoods(TYPES.NEW);
    // getGoods(TYPES.SELL);
    // getGoods('pop', goodsState.pop.page + 1);

    return {
      getHomeData,
      getGoods,
      // banners,
      // recommends
      ...toRefs(states),
      ...toRefs(goodsState),
      showGoods
    };
  }
});
</script>

<style lang='scss' scoped>
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
