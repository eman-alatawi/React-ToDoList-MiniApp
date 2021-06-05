// TodoList simple app
// App.js

import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Title from "./components/Title";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  };
  render() {
    const todosComponents = this.state.todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        item={todoItem}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div className="content-container">
        <Title />
        <div className="todo-list">{todosComponents}</div>
      </div>
    );
  }
}

export default App;
