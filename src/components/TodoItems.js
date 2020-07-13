import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      filterType,
      entries,
      updateFilterType,
      deleteItems,
      completeItems,
    } = this.props;
    
    // let myEntries = entries.filter(item => item.text.startsWith(searchValue) || searchValue === "");
    const itemsCount = entries.length;
    const completedItemsCount = entries.filter(
      (item) => item.completed === true
    ).length;
    const uncompletedItemsCount = itemsCount - completedItemsCount;
    const selectedItemsCount = entries.filter((item) => item.selected === true)
      .length;

    const keys = entries.filter((item) => item.selected).map((x) => x.key);
    return (
      <React.Fragment>
        <div className="btn-container ">
          <label className={itemsCount > 0 ? "label" : ""}>
            {itemsCount > 0 ? itemsCount : ""}
          </label>
          <button
            onClick={() => updateFilterType("all")}
            className={
              filterType === "all" ? "operation selected-btn" : "operation"
            }
          >
            All
          </button>
          <label className={completedItemsCount > 0 ? "label" : ""}>
            {completedItemsCount > 0 ? completedItemsCount : ""}
          </label>
          <button
            onClick={() => updateFilterType("complete")}
            className={
              filterType === "complete" ? "operation selected-btn" : "operation"
            }
            // style={{backgroundColor: filterType === "complete" ? "red" : "green" }}
          >
            Complete
          </button>
          <label className={uncompletedItemsCount > 0 ? "label" : ""}>
            {uncompletedItemsCount > 0 ? uncompletedItemsCount : ""}
          </label>
          <button
            onClick={() => updateFilterType("uncomplete")}
            className={
              filterType === "uncomplete"
                ? "operation selected-btn"
                : "operation"
            }
          >
            Uncomplete
          </button>

          <div style={{ display: selectedItemsCount > 0 ? "inline-block" : "none" }}>
            <button onClick={() => deleteItems(keys)} className="button">
              clear tasks
            </button>
            <button onClick={() => completeItems(true)} className="button">
              complete tasks
            </button>
            <button onClick={() => completeItems(false)} className="button">
              uncomplete tasks
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoItems;
