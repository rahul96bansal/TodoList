import {
  DELETE_MULTIPLE_TODO,
  COMPLETE_MULTIPLE_TODO,
  UNCOMPLETE_MULTIPLE_TODO,
  CLEAR_COMPLETE_TODO,
} from "../actions/addTodos";
import { VisibilityFilters } from "../actions/visibleTodoList";

import React from "react";
import FilterButton from "../containers/FilterButton";
import OperationButton from "../containers/OperationButton";
import Label from "../containers/Label";

export const Buttons = ({ allCount, completeCount }) => {
  console.log("allCount", allCount);
  return (
    <React.Fragment>
      {allCount > 0 ? (
        <div className="btn-container ">
          <div>
            <Label></Label>
          </div>

          <div>
            <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>

            <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
              Active
            </FilterButton>
            <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
              Completed
            </FilterButton>
          </div>

          {/* <FilterButton filter={VisibilityFilters.SHOW_SELECTED}>
        Selected
      </FilterButton> */}

          {/* <div style={{ display: "inline-block" }}> */}
          <div>
            <OperationButton
              filter={VisibilityFilters.SHOW_SELECTED}
              operationType={DELETE_MULTIPLE_TODO}
            >
              clr
            </OperationButton>
            <OperationButton
              filter={VisibilityFilters.SHOW_SELECTED}
              operationType={COMPLETE_MULTIPLE_TODO}
            >
              comp
            </OperationButton>

            <OperationButton
              filter={VisibilityFilters.SHOW_SELECTED}
              operationType={UNCOMPLETE_MULTIPLE_TODO}
            >
              uncomp
            </OperationButton>

            {completeCount > 0 ? (
              <OperationButton
                filter={VisibilityFilters.SHOW_COMPLETED}
                operationType={CLEAR_COMPLETE_TODO}
              >
                clrComp
              </OperationButton>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

// export default Buttons;
