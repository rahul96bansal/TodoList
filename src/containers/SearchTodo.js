import React from "react";
import { searchTodo } from "../actions/searchedTodoList";
import { connect } from "react-redux";

const SearchTodo = ({ dispatch }) => {
  let input = "";
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(searchTodo(input.value.trim()));
  };
//   const handleSubmit = (e) => {
//     handleChange(e);
//     input.value = "";
//   };

  return (
    <header>
      

      <form className="form" onSubmit={handleChange}>
        <input
          type="text"
          ref={(name) => (input = name)}
          onChange={handleChange}
          placeholder="Search..."
        ></input>
      </form>
    </header>
  );
};

export default connect()(SearchTodo);
