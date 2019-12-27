import React, { Component } from 'react';
import Todos from './Todos';
import Addtodo from './AddTodo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  };
  // Hook up an event to delete events, you need to add the function to delete to be here.
  // Because it has to interact with the state above. So function created below
  deleteTodo = id => {
    // function going to take id as param so we can look up and filter
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo />
      </div>
    );
  }
}

export default App;
