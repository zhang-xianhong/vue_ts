<template>
  <div class="todoitem">
    <input
      type="checkbox"
      :checked="todo.status === FINISHED"
      @click="setStatus(todo.id)"
    />
    <span :class="todo.status === FINISHED ? 'line-through' : ''">
      {{ todo.content }}
    </span>
    <button class="btn" @click="removeTodo(todo.id)">删除</button>
    <button
      v-if="todo.status !== FINISHED"
      @click="setDoing(todo.id)"
      class="doing"
    >
      {{ todo.status === DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo, TODO_STATUS } from "../../types/index";
interface IStatusState {
  DOING: TODO_STATUS;
  WILLDO: TODO_STATUS;
  FINISHED: TODO_STATUS;
}
export default defineComponent({
  name: "ListItem",
  props: {
    todo: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const statusState: IStatusState = {
      DOING: TODO_STATUS.DOING,
      WILLDO: TODO_STATUS.WILLDO,
      FINISHED: TODO_STATUS.FINISHED,
    };

    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };

    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };

    const setDoing = (id: number): void => {
      emit("setDoing", id);
    };
    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style lang="scss" scoped>
.todoitem {
  .line-through {
    text-decoration: line-through;
  }
  .btn {
    margin-left: 40px;
    background-color: #fff;
  }
  .doing {
    background-color: deeppink;
    color: #fff;
  }
  & > button {
    border: none;
  }
}
</style>