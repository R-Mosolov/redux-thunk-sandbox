import { connect } from 'react-redux';

function Counter({ store, inc, loading }) {
  return (
    <div className="App">
      <h1>{(loading) ? 'Пожалуйста, подождите...' : store}</h1>
      <button onClick={inc}>Прибавить 1</button>
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
    inc: () => dispatch({ type: 'INC' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);