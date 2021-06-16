<template>
  <div class="todo-input">
    <input
      type="text"
      v-model="todoValue"
      @keyup.enter="setTodoValue"
      placeholder="please input something"
    />
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">我是按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IUseTodo, useTodo } from "../../hooks/index";
// import { ElButtonGroup } from 'element-plus'
export default defineComponent({
  name: "TodoInput",
  setup() {
    const todoValue = ref<string>("");
    const { setTodo }: IUseTodo = useTodo();
    const setTodoValue = (value: string): void => {
      if (todoValue.value.trim().length) {
        //   设置数据
        // alert(todoValue.value);
        setTodo(todoValue.value);
        todoValue.value = "";
      }
    };
    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-input {
  width: 500px;
}
</style>