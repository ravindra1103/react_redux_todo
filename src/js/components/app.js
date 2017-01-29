import React, { Component } from 'react';
import { addTodo, removeListItem } from '../actions/todos';
import TodosList from './TodosList';
import Header from './Header';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super (props);
    this._handleAddTodo = this._handleAddTodo.bind(this);
  }
  _handleAddTodo(text) {
    this.props.dispatch(addTodo(text));
    //this.props.dispatch(addNewNameToList(1, 'hello123'));
    //this.props.dispatch(removeNewProductToList(2, {id: 1, productName: 'iphone7'}));
    this.props.dispatch(removeListItem(2));
    this.props.dispatch(removeListItem(1));
  }
  render () {
    return (
      <div>
        <Header>Todos List</Header>
        <AddTodo onClick={this._handleAddTodo}>Add todo</AddTodo>
        <TodosList/>
      </div>
    );
  }
}

export default connect() (App);
