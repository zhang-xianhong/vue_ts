<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Slide'
});
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
