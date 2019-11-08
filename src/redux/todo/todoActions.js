import uuid from "uuid";

import { ADD_TODO, TOGGLE_TODO } from "./todoTypes";

export const addTodo = (todo = "") => {
  return {
    type: ADD_TODO,
    text: todo,
    id: uuid.v4()
  };
};

export const toggleTodo = (id = "") => {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};
