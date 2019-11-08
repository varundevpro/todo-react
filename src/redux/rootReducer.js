import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
import filterReducer from "./visibilityFilter/filterReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer
});

export default rootReducer;
