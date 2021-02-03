import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsyncValue } from '../actions';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterState: () => dispatch({ type: 'FILTER_STATE' }),
    actions: bindActionCreators({ getAsyncValue }, dispatch),
  }
};

class Counter extends Component {
  static defaultProps = {
    actions: {
      getAsyncValue: () => {},
    }
  };

  render() {
    const { store, filterState } = this.props;

    return (
      <div className="App">
        {store}
        <br/>
        <button onClick={filterState}>Отфильтровать</button>
        <button onClick={() => this.props.actions.getAsyncValue()}>Получить значение (асинхронно)</button>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);