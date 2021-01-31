import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getAsyncValue();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.store}</h1>
        <button onClick={this.props.inc}>Прибавить 1</button>
        <button onClick={this.props.getAsyncValue}>Прибавить 100 (асинхронно)</button>
      </div>
    );
  };
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
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);