<template>
  <div>
    <list-item
      v-for="item of todoList"
      :key="item.id"
      :todo="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from "@/hooks";
import { ITodo } from "@/types";
import { defineComponent, PropType } from "vue";
import ListItem from "./Item.vue";
export default defineComponent({
  name: "List",
  components: {
    ListItem,
  },
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  setup() {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();
    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>