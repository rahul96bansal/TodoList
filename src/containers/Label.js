import { VisibilityFilters } from "../actions/visibleTodoList";
import { connect } from "react-redux";
import { Label } from "../component/Button";
import { getVisibleTodos } from "./VisibleTodoList"

export const MapStateToProps = (state) => ({
  activeCount: getVisibleTodos(state.todos, VisibilityFilters.SHOW_ACTIVE, "").length,
});

export default connect(MapStateToProps)(Label);