import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./list";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from "../actions/todos";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = item => {
    this.props.dispatch(handleDeleteTodo(item));
  };

  toggleItem = item => {
    this.props.dispatch(handleToggleTodo(item));
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="Add a todo item"
          ref={input => {
            this.input = input;
          }}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          removeItem={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
