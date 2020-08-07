import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "./TodoList.css";
import TodoList from "./components/TodoList";
// import Test from "./components/Test";

import { Provider } from "react-redux";
import store from "./redux/store";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import AllCount from "./containers/AllCount"
import {Buttons} from "./component/Buttons";
import SearchTodo from "./containers/SearchTodo";

function App() {
  return (
    <Provider store={store}>
      <section className="todoapp">
        <div className="container">
          {/* <Test /> */}
          {/* <TodoList /> */}

          {/* <SearchTodo /> */}
          <AddTodo />
          <VisibleTodoList />
          <AllCount />
          {/* <footer class="info"></footer> */}
        </div>
      </section>
    </Provider>
  );
}

export default App;
