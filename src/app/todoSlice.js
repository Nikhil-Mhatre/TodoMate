import { createSlice, nanoid } from "@reduxjs/toolkit";

const LOCAL_STORAGE = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  todos:
    LOCAL_STORAGE !== null
      ? LOCAL_STORAGE.length > 0
        ? LOCAL_STORAGE
        : []
      : [],
};

const todoReducers = {
  addNewTodo: (state, action) => {
    const newTodo = {
      id: nanoid,
      text: action.payload.text,
      completed: false,
    };
    state.todos.push(newTodo);
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: todoReducers,
});

export const { addNewTodo } = todoSlice.actions;

export default todoSlice.reducer;
