import { createStore, combineReducers } from 'redux';
const initialState = {
  id: {
    name: '',
    description: '',
    quantity: 0,
    imageURL: '',
  },
};
const ADD_CANDY = 'ADD_CANDY';
const REMOVE_CANDY = 'REMOVE_CANDY';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      state.name = {
        ...state.id,
        quantity: state.id.quantity + action.quantity,
      };
      return state;
    case CHANGE_DESCRIPTION:
      state.id = { ...state.id, description: action.description };
      return state;
    case REMOVE_CANDY:
      state.id = {
        ...state.id,
        quantity: state.id.quantity - action.quanitty,
      };
      if (state.id.quantity < 0) {
        return `you have no more ${state.id.name} in your bag`;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default candyReducer;
