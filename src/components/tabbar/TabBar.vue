<template>
   <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TabBar'
});
</script>
<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
    z-index: 9;
    height: 64px;
  }

</style>
