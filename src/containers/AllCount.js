import { VisibilityFilters } from "../actions/visibleTodoList";
import { connect } from "react-redux";
import { Buttons } from "../component/Buttons";
import { getVisibleTodos } from "./VisibleTodoList"

const MapStateToProps = (state) => ({
  allCount: getVisibleTodos(state.todos, VisibilityFilters.SHOW_ALL, "").length,
  completeCount: getVisibleTodos(state.todos, VisibilityFilters.SHOW_COMPLETED, "").length,
});

export default connect(MapStateToProps)(Buttons);
