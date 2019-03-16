import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import AOS from 'aos';

import Header from './components/Header'
import Main from './components/Main'
import AboutBethlehem from './components/AboutBethlehem'
import AboutTheCouple from './components/AboutTheCouple'
import Registry from './components/Registry'

class App extends Component {
    componentDidMount(){
      AOS.init({
        duration : 2000
      })
    }
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={ Main } />
          <Route exact path="/bethlehem" component={ AboutBethlehem } />
          <Route exact path="/aboutTheCouple" component={ AboutTheCouple } />
          <Route exact path="/registry" component={ Registry } />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
