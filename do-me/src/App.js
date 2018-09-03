import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [{ id: 1, content: 'read more' }, { id: 2, content: 'rest!' }]
  };
  deleteTodo = id => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      // todos:todos
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center green-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
