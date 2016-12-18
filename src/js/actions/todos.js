export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(todoText) {
  return dispatch => {
    dispatch({type: ADD_TODO, todoText});
  };
}

export function toggleTodo(id) {
  return dispatch => {
    dispatch({type: TOGGLE_TODO, id});
  };
}
