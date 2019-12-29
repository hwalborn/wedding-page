import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'
import AboutBethlehem from './components/AboutBethlehem'
import AboutTheCouple from './components/AboutTheCouple'
import Registry from './components/Registry'
import BigDay from './components/BigDay'
import Transportation from './components/Transportation'

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
        <div id="content">
          <Route exact path="/" component={ Main } />
          <Route exact path="/bethlehem" component={ AboutBethlehem } />
          <Route exact path="/aboutTheCouple" component={ AboutTheCouple } />
          <Route exact path="/registry" component={ Registry } />
          <Route exact path="/bigDay" component={ BigDay } />
          <Route exact path="/transportation" component={ Transportation } />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
