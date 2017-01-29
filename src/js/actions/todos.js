export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_NEW_NAME_TO_LIST = 'ADD_NEW_NAME_TO_LIST';
export const ADD_NEW_PRODUCT_TO_LIST = 'ADD_NEW_PRODUCT_TO_LIST';
export const REMOVE_NEW_PRODUCT_FROM_LIST = 'REMOVE_NEW_PRODUCT_FROM_LIST';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';


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

export function addNewNameToList(listId, name) {
  return dispatch => {
    dispatch({type: ADD_NEW_NAME_TO_LIST, itemDetails: {listId: listId, name: name }});
  };
}
export function addNewProductToList(listId, product) {
  return dispatch => {
    dispatch({type: ADD_NEW_PRODUCT_TO_LIST, itemDetails: {listId: listId, product: product }});
  };
}

export function removeNewProductToList(listId, product) {
  return dispatch => {
    dispatch({type: REMOVE_NEW_PRODUCT_FROM_LIST, itemDetails: {listId: listId, product: product }});
  };
}

export function removeListItem(listId) {
  return dispatch => {
    dispatch({type: REMOVE_LIST_ITEM, listId});
  };
}
