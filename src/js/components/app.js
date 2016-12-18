import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import TodosList from './TodosList';
import Header from './Header';
import AddTodo from './AddTodo';

export class App extends Component {
  constructor(props) {
    super (props);
    this._handleAddTodo = this._handleAddTodo.bind(this);
  }
  _handleAddTodo(text) {
    this.props.dispatch(addTodo(text));
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

App.propTypes = {
  todos: PropTypes.array,
  id: PropTypes.number
};

let select = (state) => ({
  todos: state.todos.todos,
  id: state.todos.id
});

export default connect(select) (App);
