import {SEARCH_VALUE} from "../actions/searchedTodoList"

function searchFilter(state = "", action) {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.value;
    default:
      return state;
  }
}

export default searchFilter