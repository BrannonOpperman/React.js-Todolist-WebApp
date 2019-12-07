import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play some mario kart' }]
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
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
