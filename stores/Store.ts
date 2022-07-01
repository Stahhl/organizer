import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export type Todo = {
  id: number;
  done: boolean;
  value: string;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      console.log(`addTodos - payload: ${action.payload.length}`);

      action.payload.forEach((element) => {
        let i = state.todos.findIndex((todo) => todo.id === element.id);

        if (i < 0) {
          console.log(`added todo: ${element.id}`);
          state.todos.push(element);
        }
      });
    },
    removeTodo: (state, action) => {
      let i = state.todos.findIndex((todo) => todo.id === action.payload);

      if (i > -1) {
        state.todos.splice(i, 1);
      }
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodos, removeTodo, clearTodos } = todoSlice.actions;

export const Store = configureStore({
  reducer: todoSlice.reducer,
});

type AppDispatch = typeof Store.dispatch;
type RootState = ReturnType<typeof Store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
