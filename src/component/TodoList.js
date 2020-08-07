import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, completeTodo, selectedTodo, deleteTodo }) => {
  console.log("todos", todos );
  return (
    <ul>
      {todos.map( todo => (
        <li
          key={todo.id}
          onClick={(event) =>
            event.target.tagName === "LI" ||
            (event.target.tagName === "SPAN" &&
              event.target.className !== "close")
              ? selectedTodo(todo.id)
              : ""
          }
          className={todo.selected ? "checked" : ""}
        >
          <input
            type="checkbox"
            onClick={() => completeTodo(todo.id)}
            onChange={() => {}}
            checked={todo.completed ? true : false}
          ></input>
          <span>{todo.text}</span>
          <span className="close" onClick={() => deleteTodo(todo.id)}>
            x
          </span>
        </li>
      ))}
    </ul>
  );
};

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired,
//       selected: PropTypes.bool.isRequired,
//     }).isRequired
//   ).isRequired,
//   todoTypes: PropTypes.shape({
//     completeTodo: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
//     selectedTodo: PropTypes.func.isRequired,
//   })
// };

export default TodoList;
