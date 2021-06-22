<template>
  <div class="goods-item">
    <img :src="showImage" alt="can't show it" />
    <!-- <img v-lazy="showImage" alt="cant't show" /> -->
    <div class="goods-info">
      <p>{{ goodsData.title }}</p>
      <span class="price">{{ goodsData.price }}</span>
      <span class="collect">{{ goodsData.cfav }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
interface IGoodsItem {
  cfav: number;
  price: string;
  title: string;
  show: {
    img: string;
  };
  image: string;
}
export default defineComponent({
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object as PropType<IGoodsItem>,
      default() {
        return {};
      }
    }
  },
  setup(props: { goodsItem: IGoodsItem }) {
    const goodsData = ref(props.goodsItem);
    // console.log('goodsData: ', goodsData);
    const showImage = computed(() => {
      return goodsData.value.image || goodsData.value.show.img;
    });
    // console.log('showImage: ', showImage.value);
    return {
      goodsData,
      showImage
    };
  }
});
</script>

<style lang="scss" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 49%;
  /* padding: 2px; */
}
.goods-item img {
  width: 100%;
  border-radius: 6px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: #ff5777;
  margin-right: 20px;
}
</style>
