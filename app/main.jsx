'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Promise from 'bluebird';

import store from './store'
import axios from 'axios';
import Root from './components/Root'
import Campus from './components/Campus';
import Home from './components/Home';
import Students from './components/Students';

import { getCampus } from './reducers/campus.jsx';
import { getStudents } from './reducers/students.jsx';

const onHomeEnter = route => {
  Promise.all([axios.get('/api/campus'), axios.get('/api/students')])
  .then(results => results.map(result => result.data))
  .then(([campuses, students]) => {
    store.dispatch(getCampus(campuses));
    store.dispatch(getStudents(students));
  })
  .catch(err => console.log('fetching students and campuses unsuccessful', err));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={Home} onEnter={onHomeEnter} />
        <Route path='/campus' component={Campus}/>
        <Route path='/students' component={Students}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)