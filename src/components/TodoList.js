import React, { Component } from "react";
import TodoItems from "./TodoItems";
import RenderItems from "./RenderItems";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filterType: "all",
      searchValue: "",
    };
  }

  addItem = (e) => {
    if (this.inputTaskName.value !== "") {
      const newItem = {
        key: Date.now(),
        text: this.inputTaskName.value,
        completed: false,
        selected: false,
      };

      this.setState(
        (prevState) => {
          const finalItems = [newItem].concat(prevState.items);
          return {
            items: finalItems,
          };
        },
        () => console.log("my added value", this.state.items)
      );

      this.inputTaskName.value = "";
    }
    e.preventDefault();
  };

  deleteItems = (keys) => {
    const filteredItems = this.state.items.filter(
      (item) => !keys.includes(item.key)
    );
    console.log("after deleteItem", filteredItems);
    this.setState({
      items: filteredItems,
    });
  };

  completeItem = (key) => {
    let updatedItems = this.state.items;
    const index = updatedItems.findIndex((value) => value.key === key);
    if (index !== -1) {
      updatedItems[index].completed = !updatedItems[index].completed;
      updatedItems = updatedItems[index].completed
        ? updatedItems.concat(updatedItems.splice(index, 1))
        : updatedItems.splice(index, 1).concat(updatedItems);

      this.setState({
        items: updatedItems,
      });
      console.log("completeItem", updatedItems);
    }
  };

  completeItems = (updatedValue) => {
    let updatedItems = this.state.items;
    let completedItems = [];
    let uncompletedItems = [];

    for (let i = 0; i < updatedItems.length; i++) {
      if (updatedItems[i].selected) {
        updatedItems[i].selected = false;
        updatedItems[i].completed = updatedValue;
      }

      if (updatedItems[i].completed) {
        completedItems = completedItems.concat(updatedItems.slice(i, i + 1));
      } else {
        uncompletedItems = uncompletedItems.concat(
          updatedItems.slice(i, i + 1)
        );
      }
    }
    this.setState({
      items: uncompletedItems.concat(completedItems),
    });
  };

  selectedItem = (key, e) => {
    let updatedItems = this.state.items;
    if (
      e.target.tagName === "LI" ||
      (e.target.tagName === "SPAN" && e.target.className !== "close")
    ) {
      let index = updatedItems.findIndex((value) => value.key === key);

      if (index !== -1) {
        updatedItems[index].selected = !updatedItems[index].selected;
        this.setState({
          items: updatedItems,
        });
      }
    }
  };

  updateFilterType = (filterType) => {
    this.setState({
      filterType: filterType,
    });
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const searchValue = this.state.searchValue
    const entries = this.state.items.filter(
      (item) =>
        item.text.toLowerCase().startsWith(searchValue.toLowerCase()) || searchValue === ""
    );
    return (
      <div className="container">
        <h1>My to do list</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
            placeholder="Search..."
          ></input>
        </form>

        <TodoItems
          entries={entries}
          // searchValue={this.state.searchValue}
          deleteItems={this.deleteItems}
          completeItems={this.completeItems}
          filterType={this.state.filterType}
          updateFilterType={this.updateFilterType}
        />

        <RenderItems
          entries={entries}
          // searchValue={this.state.searchValue}
          filterType={this.state.filterType}
          deleteItems={this.deleteItems}
          completeItem={this.completeItem}
          selectedItem={this.selectedItem}
        />

        <form className="form" onSubmit={this.addItem}>
          <input
            ref={(name) => (this.inputTaskName = name)}
            placeholder="+ Add Item"
            autoFocus
          ></input>
        </form>
      </div>
    );
  }
}

export default TodoList;
