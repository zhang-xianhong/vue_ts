import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING
} from '@/store/actionTypes';
import { ITodo, TODO_STATUS } from '@/types';
import { useStore, Store } from 'vuex';
import { watch } from 'vue';

export interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IuseLocalStorage {
  setLocalList: (todoList: ITodo[]) => void;
  getLocalList: () => ITodo[];
}

function useTodo(): IUseTodo {
  const store: Store<any> = useStore();
  const { setLocalList, getLocalList }: IuseLocalStorage = useLocalStorage();
  const todoList: ITodo[] = getLocalList();

  watch(
    () => {
      return store.state.list; //第一个参数监听要变化的值,把变化的值放到第二个参数的参数上
    },
    todoList => {
      setLocalList(todoList);
    }
  );

  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    };
    store.dispatch(SET_TODO, todo);
  }

  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList);
    console.log(store.state.list);
  }

  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id);
  }

  function setStatus(id: number): void {
    console.log('setStatus');
    store.dispatch(SET_TODO_STATUS, id);
  }

  function setDoing(id: number): void {
    console.log('setDoing');
    store.dispatch(SET_DOING, id);
  }

  function useLocalStorage(): IuseLocalStorage {
    function setLocalList(todoList: ITodo[]): void {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    function getLocalList(): ITodo[] {
      return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    return {
      setLocalList,
      getLocalList
    };
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  };
}

export { useTodo };
