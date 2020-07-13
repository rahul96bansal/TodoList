import React, { Component } from "react";
import FlipMove from "react-flip-move";

class RenderItems extends Component {
  constructor(props) {
    super(props);
  }

  filterTasks = () => {
    let { filterType, entries } = this.props;
    // console.log("searchValue", searchValue)
    if (filterType === "complete") {
      entries = entries.filter((item) => item.completed === true);
    } else if (filterType === "uncomplete") {
      entries = entries.filter((item) => item.completed === false);
    }
    return entries;
  };

  createTasks = (item) => {
    const { selectedItem, deleteItems, completeItem } = this.props;
    return (
      <li
        key={item.key}
        onClick={(e) => selectedItem(item.key, e)}
        className={item.selected ? "checked" : ""}
      >
        <input
          type="checkbox"
          onClick={() => completeItem(item.key)}
          defaultChecked={item.completed ? true : false}
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
        {/* <FlipMove duration={25} easing="ease-out"> */}
          <ul>{this.filterTasks().map(this.createTasks)}</ul>
        {/* </FlipMove> */}
      </div>
    );
  }
}

export default RenderItems;
