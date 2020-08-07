// // import * as actions from './types.js'

// export const ADD_TODO = "ADD_TODO";
// export const COMPLETE_TODO = "COMPLETE_TODO";
// export const DELETE_TODO = "DELETE_TODO";
// export const SELECTED_TODO = "SELECTED_TODO";

// export const TODO_OPERATION = "TODO_OPERATION";

// export const COMPLETE_MULTIPLE_TODO = "COMPLETE_MULTIPLE_TODO";
// export const UNCOMPLETE_MULTIPLE_TODO = "UNCOMPLETE_MULTIPLE_TODO";
// export const DELETE_MULTIPLE_TODO = "DELETE_MULTIPLE_TODO";

// export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// export const SHOW_ALL = "SHOW_ALL";
// export const SHOW_COMPLETED = "SHOW_COMPLETED";
// export const SHOW_ACTIVE = "SHOW_ACTIVE";
// export const SHOW_SELECTED = "SHOW_SELECTED";

// export const SEARCH_VALUE = "SEARCH_VALUE"

// let nextTodoId = 0;

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   id: nextTodoId++,
//   text,
// });

// export const setVisibilityFilter = (filter) => ({
//   type: SET_VISIBILITY_FILTER,
//   filter,
// });

// export const completeTodo = (id) => ({
//   type: COMPLETE_TODO,
//   id,
// });

// export const todoMultipleOperation = (id) => ({
//   type: TODO_OPERATION,
//   id,
// });
// // export const completeMultipleTodo = () => ({
// //     type: COMPLETE_MULTIPLE_TODO,
// // })

// // export const deleteMultipleTodo = () => ({
// //     type: DELETE_MULTIPLE_TODO,
// // })

// export const deleteTodo = (id) => ({
//   type: DELETE_TODO,
//   id,
// });

// export const selectedTodo = (id) => ({
//   type: SELECTED_TODO,
//   id,
// });

// export const searchTodo = (value) =>({
//   type: SEARCH_VALUE, 
//   value,
// }) 

// export const VisibilityFilters = {
//   SHOW_ALL: SHOW_ALL,
//   SHOW_COMPLETED: SHOW_COMPLETED,
//   SHOW_ACTIVE: SHOW_ACTIVE,
//   SHOW_SELECTED: SHOW_SELECTED,
// };

// export const OperationType = {
//   COMPLETE_MULTIPLE_TODO: COMPLETE_MULTIPLE_TODO,
//   UNCOMPLETE_MULTIPLE_TODO: UNCOMPLETE_MULTIPLE_TODO,
//   DELETE_MULTIPLE_TODO: DELETE_MULTIPLE_TODO,
// };
