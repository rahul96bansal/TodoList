import { setVisibilityFilter, VisibilityFilters } from "../actions/visibleTodoList";
import { connect } from "react-redux";
import { Button1 } from "../component/Button";
import { getVisibleTodos } from "./VisibleTodoList"

export const customMapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  count: getVisibleTodos(state.todos, ownProps.filter, state.searchFilter).length,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(customMapStateToProps, mapDispatchToProps)(Button1);
