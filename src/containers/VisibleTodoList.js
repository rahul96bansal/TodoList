import { completeTodo, deleteTodo, selectedTodo } from "../actions/addTodos";
import { VisibilityFilters } from "../actions/visibleTodoList";
import { connect } from "react-redux";
import TodoList from "../component/TodoList";

export const getVisibleTodos = (todos, filter, searchValue) => {
  // console.log("MysearchValue", searchValue);
  todos = todos.filter(
    (todo) =>
      searchValue === "" ||
      todo.text.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  // console.log("after search filter", todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case VisibilityFilters.SHOW_SELECTED:
      return todos.filter((t) => t.selected);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
    state.searchFilter
  ),
});

const mapDispatchToProps = (dispatch) => ({
  completeTodo: (id) => dispatch(completeTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  selectedTodo: (id) => dispatch(selectedTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
