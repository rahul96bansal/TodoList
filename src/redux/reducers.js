// import {
//   SET_VISIBILITY_FILTER,
//   ADD_TODO,
//   COMPLETE_TODO,
//   SHOW_ALL,
//   SELECTED_TODO,
//   DELETE_TODO,
//   OperationType,
//   TODO_OPERATION,
//   SEARCH_VALUE,
// } from "./actions";
// import { combineReducers } from "redux";

// // const initialState = {
// //   visibilityFilter: VisibilityFilters.SHOW_ALL,
// //   todos: [],
// // };
// const completeItem = (state, id) => {
//   const index = state.findIndex((todo) => todo.id === id);
//   if (index !== -1) {
//     let object = state.slice(index, 1)[0];
//     return [
//       ...state.slice(0, index),
//       ...state.slice(index + 1),
//       { ...object, completed: !object.completed },
//     ];
//   } else {
//     return state;
//   }
// };

// const func = (state, updatedValue) => {
//   let unselectedItems = state.filter((todo) => !todo.selected);

//   let selectedItems = state
//     .filter((todo) => todo.selected)
//     .map((todo) => {
//       return { ...todo, completed: updatedValue, selected: false };
//     });

//   return updatedValue
//     ? unselectedItems.concat(selectedItems)
//     : selectedItems.concat(unselectedItems);

//   // let newState = state.slice();
//   // let completedItems = [];
//   // let uncompletedItems = [];

//   // console.log("updatedValue", updatedValue);
//   // for (let i = 0; i < newState.length; i++) {
//   //   if (newState[i].selected) {
//   //     newState[i].selected = false;
//   //     newState[i].completed = updatedValue;
//   //   }

//   //   if (newState[i].completed) {
//   //     completedItems = completedItems.concat(newState.slice(i, i + 1));
//   //   } else {
//   //     uncompletedItems = uncompletedItems.concat(newState.slice(i, i + 1));
//   //   }
//   // }
//   // return [...uncompletedItems, ...completedItems];
// };

// const itemMultipleOperation = (state, action) => {
//   console.log("printing action", action.id);
//   switch (action.id) {
//     case OperationType.COMPLETE_MULTIPLE_TODO:
//       console.log("state", func(state, true));
//       return func(state, true);
//     case OperationType.DELETE_MULTIPLE_TODO:
//       return state.filter((todo) => !todo.selected);
//     case OperationType.UNCOMPLETE_MULTIPLE_TODO:
//       return func(state, false);
//     default:
//       return state;
//   }
// };

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         {
//           id: action.id,
//           text: action.text,
//           completed: false,
//           selected: false,
//         },
//         ...state,
//       ];
//     case COMPLETE_TODO:
//       return completeItem(state, action.id);
//     case TODO_OPERATION:
//       return itemMultipleOperation(state, action);
//     case SELECTED_TODO:
//       return state.map((todo) =>
//         todo.id === action.id
//           ? {
//               ...todo,
//               selected: !todo.selected,
//             }
//           : todo
//       );
//     case DELETE_TODO:
//       return state.filter((todo) => action.id !== todo.id);
//     default:
//       return state;
//   }
// }

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }

// function searchFilter(state = "", action) {
//   switch (action.type) {
//     case SEARCH_VALUE:
//       return action.value;
//     default:
//       return state;
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos,
//   searchFilter,
// });

// // function todoApp(state = initialState, action) {
// //     return {
// //         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// //         todos: todos(state.todos, action)
// //     }
// // }

// export default todoApp;
