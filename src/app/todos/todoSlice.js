import { createSlice, todoCRUDReducers } from "../index";

const LOCAL_STORAGE = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  todos:
    LOCAL_STORAGE !== null
      ? LOCAL_STORAGE.length > 0
        ? LOCAL_STORAGE
        : []
      : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: todoCRUDReducers,
});

export const {
  addNewTodo,
  storeLocally,
  updateTodoList,
  updateTodo,
  removeTodo,
  toggleComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
