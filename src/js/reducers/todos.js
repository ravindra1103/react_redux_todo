import { ADD_TODO,
TOGGLE_TODO,
ADD_NEW_NAME_TO_LIST,
 ADD_NEW_PRODUCT_TO_LIST,
REMOVE_NEW_PRODUCT_FROM_LIST,
REMOVE_LIST_ITEM
 } from '../actions/Actions';

export const initialState = {
  id: -1,
  todos: [],
  delNewProduct: false,
  wishList:
  {
    1 :  {listName: 'test list1', productsList: [{id: 1, productName: 'iphone6'}]},
    2 :  {listName: 'test list2', productsList: [{id: 1, productName: 'iphone7'}, {id: 2, productName: 'iphone9'}]}
  }
};
const handlers = {
  [ADD_TODO]: (state, action) => ({
    ...state,
    id : ++state.id,
    todos: [...state.todos, { id: state.id, text : action.todoText, completed : false }]
  }),
  [ADD_NEW_NAME_TO_LIST]: (state, action) => {
    return {
      ...state,
      wishList : {...state.wishList,
        [action.itemDetails.listId] : {...state.wishList[action.itemDetails.listId],
          listName: action.itemDetails.name}}
    };
  },
  [ADD_NEW_PRODUCT_TO_LIST]: (state, action) => {
    return {
      ...state,
      wishList: {
        ...state.wishList,
        [action.itemDetails.listId] : {...state.wishList[action.itemDetails.listId],
          productsList: [...state.wishList[action.itemDetails.listId].productsList, action.itemDetails.product]
        }
      }
    };
  },
  [REMOVE_NEW_PRODUCT_FROM_LIST]: (state, action) => {
    let newList = state.wishList[action.itemDetails.listId].productsList.filter((item) => {
      if(item.id !== action.itemDetails.product.id) {
        return item;
      }
    });
    return {
      ...state,
      wishList: {
        ...state.wishList,
        [action.itemDetails.listId] : {...state.wishList[action.itemDetails.listId],
          productsList: [...newList]
        }
      }
    };
  },
  [REMOVE_LIST_ITEM]: (state, action) => {
    let newWishList = {...state.wishList};
    delete newWishList[action.listId];
    return {
      ...state,
      wishList: {...newWishList}
    };
  },
  [TOGGLE_TODO]: (state, action) => ({
    ...state,
    todos: state.todos.map((todo, index) => {
      if (index === action.id) {
        todo = {...todo, completed: !todo.completed};
      }
      return todo;
    })
  })
};

export default function todoReducer(state = initialState, action) {
  let handler = handlers[action.type];
  if(!handler) return state;
  return { ...state, ...handler(state, action)};
}
