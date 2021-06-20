<template>
  <div class="about">
    <h2>关于</h2>
    <div>
      <button @click="overAction">点餐完毕</button>
    </div>
    <div>{{ overText }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'About',
  setup() {
    const overText = ref('红色基因');
    const overAction = () => {
      overText.value = overText.value + '是我';
      // document.title = overText.value;
    };
    watch(overText, (newValue, oldValue) => {
      console.log(`new---${newValue}`);
      console.log(`old---${oldValue}`);
      document.title = overText.value;
    });
    return {
      overText,
      overAction
    };
  }
});
</script>
