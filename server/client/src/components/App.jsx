import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Deck from './Deck';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact path="/game" component={Deck} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
