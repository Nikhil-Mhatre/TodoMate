import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice";
import todoCRUDReducers from "./todos/reducers";

export { configureStore, createSlice, nanoid, todoReducer, todoCRUDReducers };
