import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {filterType, entries, updateFilterType, deleteItems, completeItems} = this.props
    const keys = entries.filter((item) => item.selected).map(x => x.key);
    return (
      <React.Fragment>
        <div className="btn-container">
          <button
            onClick={() => deleteItems(keys)}
            className="operation"
          >
            clear tasks
          </button>
          <button
            onClick={() => completeItems(true)}
            className="operation"
          >
            complete tasks
          </button>
          <button
            onClick={() => completeItems(false)}
            value="uncompleteTasks"
            className="operation"
          >
            uncomplete tasks
          </button>

          <button
            onClick={() => updateFilterType("complete")}
            className="operation"
            style={{backgroundColor: filterType==="complete"? "red": "green"}}
          >
            complete
          </button>
          <button
            onClick={() => updateFilterType("uncomplete")}
            className="operation"
            style={{backgroundColor: filterType==="uncomplete"? "red": "green"}}
          >
            uncomplete
          </button>
          <button
            onClick={() => updateFilterType("all")}
            className="operation"
            style={{backgroundColor: filterType==="all"? "red": "green"}}
          >
            all
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoItems;
