<template>
  <div class="wrapper">
    <todo-input />
    <List :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import TodoInput from "./components/todoInput/Index.vue";
import List from "./components/todoList/Index.vue";
import { IUseTodo, useTodo } from "./hooks/index";
export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    List,
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store = useStore();
    onMounted(() => {
      setTimeout(() => {
        setTodoList();
      }, 1000);
    });
    return {
      todoList: computed(() => {
        return store.state.list;
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #eee;
}
</style>