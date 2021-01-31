import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './components/counter';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.getInitialState();
      return this.setState({ loading: false });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <Counter loading={this.state.loading} />
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
    getInitialState: () => dispatch({ type: 'GET_INITIAL_STATE' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);