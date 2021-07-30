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

interface IArticle {
  id: number,
  typeId: number,
  articleTitle: string,
  articleContent: string,
  articleIntroduce: string,
  addTime: string,
  viewCount: number,
  types?: Array<object>
}

export { ITodo, IState, TODO_STATUS, IArticle };
