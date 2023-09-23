import { configureStore, todoReducer } from "./index";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
