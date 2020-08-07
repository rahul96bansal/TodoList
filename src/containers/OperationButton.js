import {
  todoMultipleOperation,
} from "../actions/addTodos";
import { connect } from "react-redux";
import { Button2 } from "../component/Button";
import { customMapStateToProps } from "./FilterButton"

// const mapStateToProps = (state, ownProps) => ({
//   count: getVisibleTodos(state.todos, ownProps.filter, state.searchFilter).length,
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(todoMultipleOperation(ownProps.operationType)),
});

export default connect(customMapStateToProps, mapDispatchToProps)(Button2);
