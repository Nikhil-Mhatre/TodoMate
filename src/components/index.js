import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  storeLocally,
  updateTodo,
  addNewTodo,
  removeTodo,
  updateTodoList,
  toggleComplete,
} from "../app/todos/todoSlice";

export {
  useState,
  useDispatch,
  useSelector,
  storeLocally,
  updateTodoList,
  addNewTodo,
  updateTodo,
  removeTodo,
  toggleComplete,
};
