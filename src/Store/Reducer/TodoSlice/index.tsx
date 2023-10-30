import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITodo} from '../../../Types/Todos';
import {
  addTodoService,
  deleteTodoService,
  updateTodoService,
} from '../../../Services/Todo.Sevices';

// export const fetchTodoList = createAsyncThunk('todo/getTodos', async () => {
//   const response = await getTodosService();
//   return response;
// });

//Defining our initialState's type
type initialStateType = {
  loading: boolean;
  todos: ITodo[];
};

const initialState: initialStateType = {
  loading: false,
  todos: [{id: 'afs', task: 'todo task 1', completed: false, imageUrl: ''}],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.loading = true;
      const newTodo = {...action.payload};
      addTodoService(newTodo);
      state.loading = false;
    },

    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const {
        payload: {id, task, completed, imageUrl},
      } = action;
      updateTodoService({id, task, completed, imageUrl});
    },

    deleteTodo: (state, action: PayloadAction<{id: string}>) => {
      deleteTodoService(action.payload.id);
    },
  },
  extraReducers() {
    // builder.addCase(fetchTodoList.fulfilled, (state, action) => {
    //   state.todos = action.payload?.data;
    // });
  },
});

export const {getTodos, addNewTodo, updateTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
