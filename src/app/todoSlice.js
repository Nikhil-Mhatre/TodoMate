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
  storeLocally: (state) => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  addNewTodo: (state, action) => {
    const newTodo = {
      id: nanoid(),
      text: action.payload.text,
      completed: false,
    };
    state.todos.push(newTodo);
  },
  removeTodo: (state, action) => {
    state.todos = state.todos.filter(
      (currentTodo) => currentTodo.id !== action.payload.id
    );
  },
  updateTodo: (state, action) => {
    const [filteredTodo] = state.todos.filter(
      (currentTodo) => currentTodo.id === action.payload.id
    );
    filteredTodo.text = action.payload.text;
  },
  toggleComplete: (state, action) => {
    const [filteredTodo] = state.todos.filter(
      (currentTodo) => currentTodo.id === action.payload.id
    );
    filteredTodo.completed = !filteredTodo.completed;
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: todoReducers,
});

export const {
  addNewTodo,
  storeLocally,
  updateTodo,
  removeTodo,
  toggleComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
