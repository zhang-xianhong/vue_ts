<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 所有的图片和文字都展示相同的图片和文字，如果不展示相同的，可以动态设置为具名插槽slot -->
    <div v-if="!isActive" class="images"><slot name="item-icon"></slot></div>
    <div v-else class="images"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" class="text"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
import { computed, ref, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'TabBarItem',
  props: {
    // path: String,
    path: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const paths = ref(props.path);
    const activeColors = ref(props.activeColor);
    const isActive = computed(() => {
      return route.path.indexOf(paths.value) !== -1;
    });
    const activeStyle = computed(() => {
      return isActive.value ? { color: activeColors.value } : {};
    });

    const itemClick = () => {
      router.push(paths.value);
    };

    return {
      paths,
      activeColors,
      isActive,
      activeStyle,
      itemClick
    };
  }
});
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.images {
    width: 24px !important;
    height: 24px !important;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
/* .active {
    color: #f00;
  } */
</style>
