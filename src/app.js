import { connect } from 'react-redux';

function App({ store, inc, getAsyncValue }) {
  return (
    <div className="App">
      {console.log('Step 1')}
      <h1>{store}</h1>
      <button onClick={inc}>Прибавить 1</button>
      <button onClick={getAsyncValue}>Прибавить 100 (асинхронно)</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: 'INC' }),
    getAsyncValue: () => {
      setTimeout(() => {
        dispatch({ type: 'INC' });
      }, 3000);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);