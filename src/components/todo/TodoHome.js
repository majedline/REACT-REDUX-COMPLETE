import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoHome extends Component {

  state = {
    todos: [
      { id: 1, content: "Do this" },
      { id: 2, content: "Do that" },
    ]
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  }

  addTodo = (todo) => {
    console.log(todo);
    todo.id = getNextID(this.state.todos);
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoHome;


const getNextID = (list) => {
  if (list == null) {
    return 0;
  } else {
    let max = list[0].id;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > max) {
        max = list[i].id;
      }
    }
    return max+1;
  }
}