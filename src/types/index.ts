enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished'
}

interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[];
}

export { ITodo, IState, TODO_STATUS };
