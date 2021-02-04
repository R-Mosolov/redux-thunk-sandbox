import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
  original: ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'],
  filtered: [],
  isFiltered: false,
};

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      return {
        ...store,
        original: store.original,
        isFiltered: false,
      };
    case 'SET_STATE':
      return {
        ...store,
        original: action.payload,
      };
    case 'FILTER_STATE':
      return {
        ...store,
        filtered: store.original.filter((item) => item !== 2 && item !== '2'),
        isFiltered: true,
      };
    default:
      return initialState;
  }
};

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => 'lightblue',
    prevState: () => 'blue',
    action: () => 'green',
    nextState: () => 'orange',
    error: () => 'red'
  }
});

const middleware = [logger, thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export {
  store,
};