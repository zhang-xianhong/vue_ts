<template>
  <div class="todo-example">
    <TodoInput />
    <List :todo-list="todoList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import TodoInput from './todoInput/Index.vue';
import List from './todoList/Index.vue';
export default defineComponent({
  name: 'TodoExample',
  components: {
    TodoInput,
    List
  },
  setup() {
    const store = useStore();
    console.log('test');
    return {
      todoList: computed(() => {
        return store.state.list;
      })
    };
  }
});
</script>
