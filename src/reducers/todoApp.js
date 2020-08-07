import todos from "./todos"
import visibilityFilter from "./visiblityFilter";
import searchFilter from "./searchFilter"
import setComplete from "./setComplete"
import { combineReducers } from "redux";

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  searchFilter,
  setComplete,
});

export default todoApp