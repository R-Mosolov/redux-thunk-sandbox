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
    actions: bindActionCreators({ getAsyncValue }, dispatch),
    filterState: () => dispatch({ type: 'FILTER_STATE' }),
    getInitialState: () => dispatch({ type: 'GET_INITIAL_STATE' }),
  }
};

class Counter extends Component {
  static defaultProps = {
    actions: {
      getAsyncValue: () => {},
    }
  };

  componentDidMount() {
    this.props.actions.getAsyncValue();
  }

  render() {
    const { store, filterState, getInitialState } = this.props;

    return (
      <div className="App">
        {(store.isFiltered) ? store.filtered : store.original}
        <br/>
        <button onClick={() => this.props.actions.getAsyncValue()}>Получить значение (асинхронно)</button>
        <button onClick={filterState}>Отфильтровать</button>
        <button onClick={getInitialState}>Получить начальный state</button>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);