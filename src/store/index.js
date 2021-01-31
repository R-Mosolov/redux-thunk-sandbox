import { createStore } from 'redux';

const initialState = 0;

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      return store += 100;
    case 'INC':
      return store += 1;
    default:
      return initialState;
  }
};

const store = createStore(reducer);

export default store;