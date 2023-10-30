export interface ITodo {
  id?: string;
  task: string;
  completed: boolean;
  imageUrl?: string;
}

export interface IDetailTodo {
  id: string;
  task: string;
  completed: boolean;
  imageUrl: string;
}
