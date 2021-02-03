import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = [2, 1, 3];

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      return store;
    case 'SET_STATE':
      return store = action.payload;
    case 'FILTER_STATE':
      return store.filter((item) => item !== 2);
    case 'GET_ASYNC_VALUE':
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) => res.json())
        .then((res) => {
          console.log(res.id.toString().split(''));
          store = res.id.toString().split('');
          return store;
        });
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