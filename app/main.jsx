'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import store from './store'
import axios from 'axios';
import Root from './components/Root'
import Campus from './components/Campus';
import Home from './components/Home';

import { getCampus } from './reducers/campus.jsx';

const onHomeEnter = route => {
  axios.get('/api/campus')
  .then(campuses => campuses.data)
  .then(campuses => store.dispatch(getCampus(campuses)))
  .catch(err => console.log('unable to get campuses', err));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={Home} onEnter={onHomeEnter} />
        <Route path='/campus' component={Campus}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)