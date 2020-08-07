export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SELECTED_TODO = "SELECTED_TODO";
export const SELECT_ALL_TODO = "SELECT_ALL_TODO"

export const TODO_OPERATION = "TODO_OPERATION";

export const COMPLETE_MULTIPLE_TODO = "COMPLETE_MULTIPLE_TODO";
export const UNCOMPLETE_MULTIPLE_TODO = "UNCOMPLETE_MULTIPLE_TODO";
export const DELETE_MULTIPLE_TODO = "DELETE_MULTIPLE_TODO";
export const CLEAR_COMPLETE_TODO = "CLEAR_COMPLETE_TODO"

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});

export const todoMultipleOperation = (id) => ({
  type: TODO_OPERATION,
  id,
});
// export const completeMultipleTodo = () => ({
//     type: COMPLETE_MULTIPLE_TODO,
// })

// export const deleteMultipleTodo = () => ({
//     type: DELETE_MULTIPLE_TODO,
// })

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const selectedTodo = (id) => ({
  type: SELECTED_TODO,
  id,
});

export const selectAllTodo = (id) => ({
  type: SELECT_ALL_TODO,
  id,
})

export const OperationType = {
  COMPLETE_MULTIPLE_TODO: COMPLETE_MULTIPLE_TODO,
  UNCOMPLETE_MULTIPLE_TODO: UNCOMPLETE_MULTIPLE_TODO,
  DELETE_MULTIPLE_TODO: DELETE_MULTIPLE_TODO,
  CLEAR_COMPLETE_TODO: CLEAR_COMPLETE_TODO,
};
