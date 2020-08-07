import { SET_COMPLETE_TODO } from "../actions/completeTodoList";

function setComplete(state = true, action) {
  switch (action.type) {
    case SET_COMPLETE_TODO:
      return !state;
    default:
      return state;
  }
}

export default setComplete;
