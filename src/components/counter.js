import React from 'react';
import { connect } from 'react-redux';

function Counter({ store, filterState, getAsyncValue }) {
  return (
    <div className="App">
      {store}
      <br/>
      <button onClick={filterState}>Отфильтровать</button>
      <button onClick={getAsyncValue}>Получить значение (асинхронно)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterState: () => dispatch({ type: 'FILTER_STATE' }),
    getAsyncValue: () => dispatch({ type: 'GET_ASYNC_VALUE' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);