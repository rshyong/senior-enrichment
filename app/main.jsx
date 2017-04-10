'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import store from './store'
import Root from './components/Root'
import Campus from './components/Campus';
import Home from './components/Home';

onHomeEnter() {

}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={Home}/>
        <Route path='/campus' component={Campus}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)