import React, { Component } from 'react';

// It needs to have a local state, to store what the user types into the input field
// so since we need state, this needs to be a class based component.

class AddTodo extends Component {
  state = {
    content: ''
  };
  handleChange = e => {
    // This function makes whatever is being kept here in sync with the input onChange
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    // First prevent default action of form being submitted, which is to refresh
    // the page.
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new to do:</label>
          <input type='text' onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
