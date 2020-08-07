import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SELECTED_TODO,
  TODO_OPERATION,
  OperationType,
  SELECT_ALL_TODO,
  //   COMPLETE_MULTIPLE_TODO,
  //   UNCOMPLETE_MULTIPLE_TODO,
  //   DELETE_MULTIPLE_TODO,
} from "../actions/addTodos";

const completeItem = (state, action) => {
  let newState = state.slice();
  const index = newState.findIndex((todo) => todo.id === action.id);
  if (index !== -1) {
    newState[index].completed = !newState[index].completed;
    return newState[index].completed
      ? newState.concat(newState.splice(index, 1))
      : newState.splice(index, 1).concat(newState);

    // let object = newState.slice(index, 1);
    // console.log("object[0]", object, index);
    // if (!object[0].completed) {
    //   return [
    //     ...newState.slice(0, index),
    //     ...newState.slice(index + 1),
    //     { ...object[0], completed: !object[0].completed },
    //   ];
    // } else {
    //   return [
    //     { ...object[0], completed: !object[0].completed },
    //     ...newState.slice(0, index),
    //     ...newState.slice(index + 1),
    //   ];
    // }
  } else {
    return newState;
  }
};

const func = (state, updatedValue) => {
  let unselectedItems = state.filter((todo) => !todo.selected);

  let selectedItems = state
    .filter((todo) => todo.selected)
    .map((todo) => {
      return { ...todo, completed: updatedValue, selected: false };
    });

  return updatedValue
    ? unselectedItems.concat(selectedItems)
    : selectedItems.concat(unselectedItems);

  // let newState = state.slice();
  // let completedItems = [];
  // let uncompletedItems = [];

  // console.log("updatedValue", updatedValue);
  // for (let i = 0; i < newState.length; i++) {
  //   if (newState[i].selected) {
  //     newState[i].selected = false;
  //     newState[i].completed = updatedValue;
  //   }

  //   if (newState[i].completed) {
  //     completedItems = completedItems.concat(newState.slice(i, i + 1));
  //   } else {
  //     uncompletedItems = uncompletedItems.concat(newState.slice(i, i + 1));
  //   }
  // }
  // return [...uncompletedItems, ...completedItems];
};

const itemMultipleOperation = (state, action) => {
  console.log("printing action", action.id);
  switch (action.id) {
    case OperationType.COMPLETE_MULTIPLE_TODO:
      console.log("state", func(state, true));
      return func(state, true);
    case OperationType.DELETE_MULTIPLE_TODO:
      return state.filter((todo) => !todo.selected);
    case OperationType.UNCOMPLETE_MULTIPLE_TODO:
      return func(state, false);
    case OperationType.CLEAR_COMPLETE_TODO:
      return state
        .filter((todo) => !todo.completed)
        .map((todo) => {
          return { ...todo, selected: false };
        });
    default:
      return state;
  }
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
          selected: false,
        },
        ...state,
      ];
    case COMPLETE_TODO:
      return completeItem(state, action);
    case TODO_OPERATION:
      return itemMultipleOperation(state, action);
    case SELECTED_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              selected: !todo.selected,
            }
          : todo
      );
    case SELECT_ALL_TODO:
      return state.map((todo) => {
        return { ...todo, completed: action.id };
      });
    case DELETE_TODO:
      return state.filter((todo) => action.id !== todo.id);
    default:
      return state;
  }
}

export default todos;
