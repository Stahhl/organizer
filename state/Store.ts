import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";

export type Todo = {
  id: number;
  done: boolean;
  value: string;
};

enum ReminderInterval {
  day_every_1,
  day_every_2,
  day_every_3,
  day_every_4,
  day_every_5,
  day_every_6,
  week_every_1,
  week_every_2,
  week_every_3,
  month_every_1,
  month_every_2,
  month_every_3,
  yearly,
}

export type Reminder = {
  id: number;
  title: string;
  description: string;
  interval: ReminderInterval;
  lastCompletedOn: Date;
  nextDueOn: Date;
}

const appSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
    lastRecalculation: Date.now(),
    reminders: [] as Reminder[],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log(`addTodo - payload: ${action.payload}`);
      state.todos.push({
        id: state.todos.length + 1,
        done: false,
        value: action.payload.trim(),
      });
      console.log(`hello ${state.todos.length}`);
    },
    changeTodoState: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].done = state.todos[item].done === true ? false : true;
      state.todos.push(state.todos.splice(item, 1)[0]);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      console.log("hi");
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export const { addTodo, changeTodoState, deleteTodo } = appSlice.actions;
export default appSlice.reducer;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const Store = configureStore({
  reducer: persistReducer(persistConfig, appSlice.reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const Persistor = persistStore(Store);

type AppDispatch = typeof Store.dispatch;
type RootState = ReturnType<typeof Store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
