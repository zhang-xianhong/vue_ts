<template>
  <div class="goods-list">
    <GoodsListItem v-for="item in goods" :key="item.iid" :goods-item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import GoodsListItem from './GoodsListItem.vue';
interface IGoods {
  cfav: number;
  price: string;
  title: string;
  show: {
    img: string;
  };
  image: string;
}
export default defineComponent({
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    showGoods: {
      type: Array as PropType<IGoods[]>,
      default() {
        return [];
      }
    }
  },
  setup(props: { showGoods: IGoods[] }) {
    const goods = ref(props.showGoods);
    // console.log('showGoods: ', goods);
    return {
      goods
    };
  }
});
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
