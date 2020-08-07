import { selectAllTodo, addTodo } from "../actions/addTodos";
import { setCompleteTodo } from "../actions/completeTodoList";
import { connect } from "react-redux";
import { AddingTodo } from "../component/AddingTodo";

const MapstateToProps = (state) => ({
  setComplete: state.setComplete,
});

const MapDispatchToProps = (dispatch) => {
  return {
    selectAllTodo: (id) => dispatch(selectAllTodo(id)),
    addTodo: (id) => dispatch(addTodo(id)),
    setCompleteTodo: () => dispatch(setCompleteTodo()),
  };
};

export default connect(MapstateToProps, MapDispatchToProps)(AddingTodo);
