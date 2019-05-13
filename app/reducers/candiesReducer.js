const initialState = [];
const ADD_CANDY = 'ADD_CANDY';
const REMOVE_CANDY = 'REMOVE_CANDY';

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      return state.map(candy => {
        if (candy.id === action.id) {
          return { ...candy, quantity: candy.quantity + action.quanity };
        } else {
          return candy;
        }
      });
    case REMOVE_CANDY:
      return state.map(candy => {
        if (candy.id === action.id) {
          return { ...candy, quantity: candy.quantity - action.quanity };
        } else {
          return candy;
        }
      });
    default:
      return state;
  }
};

export default candyReducer;
