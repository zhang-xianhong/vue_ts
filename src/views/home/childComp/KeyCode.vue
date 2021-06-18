<template>
    <div class="keycode">
        <ul>
            <li v-for="item in keyword" :key="item.is_red">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
interface IKeyWords {
  acm: string,
  is_red: string,
  words: string
}
export default defineComponent({
  name: 'KeyCode',
  props: {
    keywords: {
      type: Array as PropType<IKeyWords[]>,
      default() {
        return [];
      }
    }
  },
  setup(props: {keywords: IKeyWords[]}) {
    const keyword:Ref<IKeyWords[]> = ref(props.keywords); 
    return {
      keyword
    };
  }
});
</script>

<style lang="scss" scoped>
.keycode {
  li {
    margin-bottom: 1px solid #eee;
  }
}
</style>