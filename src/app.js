import { connect } from 'react-redux';

function App({ store, inc }) {
  return (
    <div className="App">
      <h1>{store}</h1>
      <button onClick={inc}>Прибавить 1</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);