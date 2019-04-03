import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/app.scss'

import List from './components/list';
import Add from './components/add'
// import Edit from './components/edit'
import View from './components/view'
import Login from './components/login'
import Signout from './components/signout'
import Signup from './components/signup';

class App extends Component {
  render() {
    return (
      <div className="App shadow p-5">
        <Switch>
          <Route path='/view/:id' component={Add} />
          <Route path='/edit/:id' component={View} />
          <Route path='/add/' component={Add} />
          <Route path='/list/' component={List} />

          <Route path='/singout/' component={Signout} />
          <Route path='/signup/' component={Signup} />
          <Route path='/' component={Login} />

        </Switch>
      </div>
    );
  }
}

export default App;
