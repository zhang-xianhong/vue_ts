<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" class="images" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { ref, defineComponent } from 'vue';
import { Swiper, SwiperItem } from '@/components/swiper';
export default defineComponent({
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props, context) {
    const banner = ref(props.banners);
    const isLoad = ref(false);
    const imageLoad = () => {
      if (!isLoad.value) {
        context.emit('swiperImageLoad');
        isLoad.value = true;
      }
    };
    return {
      banner,
      imageLoad
    };
  }
});
</script>
<style scoped>
.images {
  width: 400px;
  height: auto;
}
</style>
