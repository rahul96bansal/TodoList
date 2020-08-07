import React from "react";
import { addTodo, selectAllTodo } from "../actions/addTodos";
import { setCompleteTodo } from "../actions/completeTodoList";
import { connect } from "react-redux";

export const AddingTodo = ({
  addTodo,
  setCompleteTodo,
  selectAllTodo,
  setComplete,
}) => {
    console.log("setComplete", setComplete);
  let input;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addTodo(input.value);
    input.value = "";
  };
  return (
    <div>
      <h1>todos</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={(name) => (input = name)}
          placeholder="+ Add Item"
          autoFocus
        />
        <div
          className="toggle-all"
          style={{color: setComplete === true ? "black" : "red"}}
          onClick={() => {
            selectAllTodo(setComplete);
            setCompleteTodo()
            }
          }
        ></div>
      </form>
    </div>
  );
};

// export default connect()(AddTodo);
