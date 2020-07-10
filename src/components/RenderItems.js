import React, { Component } from "react";

class RenderItems extends Component {
  constructor(props) {
    super(props);
  }

  filterTasks = () => {
    let {filterType, entries} = this.props
    if (filterType === "complete") {
        entries = entries.filter(
        (item) => item.completed === true
      );
    } else if (filterType === "uncomplete") {
        entries = entries.filter(
        (item) => item.completed === false
      );
    }
    return entries;
  };

  createTasks = (item) => {
    const { selectedItem, deleteItems, completeItem} = this.props;
    return (
      <li
        key={item.key}
        onClick={(e) => selectedItem(item.key, e)}
        style={
          item.selected
            ? { backgroundColor: "rgb(50, 13, 185)", color: "white" }
            : { backgroundColor: "white", color: "rgb(36, 31, 114)" }
        }
      >
        <input
          type="checkbox"
          onClick={() => completeItem(item.key)}
          checked={item.completed? true: false}
        ></input>
        <span>{item.text}</span>
        <span className="close" onClick={() => deleteItems([item.key])}>
          x
        </span>
      </li>
    );
  };

  render() {
    return (
      <div>
        <ul>{this.filterTasks().map(this.createTasks)}</ul>
      </div>
    );
  }
}

export default RenderItems;
