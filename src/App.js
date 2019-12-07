import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

// Root Component. Responsible for passing links to functions to Todos and AddToDo
class App extends Component {
  state = {
    // Default items on screen when page loads/reloads
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play some PAC-MAN' },
      { id: 3, content: 'Spend hours watching YouTube videos' },
      { id: 4, content: 'Use all your holiday time to code' },
      { id: 5, content: 'Procrastinate then wonder why you work so much other days' }]
  }
  deleteTodo = (id) => {
    // Creates a new array containing all the elements minus the object whose id matches the one clicked
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    // Sets the new array to be equal to the array created above
    this.setState({
      // Can just use 'todos' as shorthand too because they have the same name
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
