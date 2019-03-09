import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

import App from './App';
import './style/App.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={ App } />
      <Route exact path="/bethlehem" component={ App } />
    </div>
  </HashRouter>,

  document.getElementById('root')
);
