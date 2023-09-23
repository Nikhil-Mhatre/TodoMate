import { nanoid } from "../index";

export default {
  storeLocally: (state) => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  updateTodoList:(state,action)=>{
    state.todos = action.payload.newTodoList
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
