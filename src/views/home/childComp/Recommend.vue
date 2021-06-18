<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" class="recommend-item" :key="index">
      <div>
        <a :href="item.link">
          <img :src="item.image" alt="不能显示" />
        </a>
      </div>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props) {
    const recommend = ref(props.recommends);
    return {
      recommend
    };
  }
});
</script>
<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 15px;
  border-bottom: 5px solid #eee;
}
.recommend-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
