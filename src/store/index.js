import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { fromJS, List } from 'immutable';

const initialState = List([4, 2, 1, 3]);

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      return store;
    case 'SET_STATE':
      return fromJS(action.payload);
    case 'FILTER_STATE':
      return store.filter((item) => item !== 2 && item !== '2');
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