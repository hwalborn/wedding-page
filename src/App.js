import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'

import Header from './components/Header'
import Main from './components/Main'
import AboutBethlehem from './components/AboutBethlehem'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={ Main } />
          <Route exact path="/bethlehem" component={ AboutBethlehem } />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
