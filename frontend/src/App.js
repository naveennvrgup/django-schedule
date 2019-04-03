import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/app.scss'

import List from './components/list';
import Add from './components/add'
// import Edit from './components/edit'
import View from './components/view'
import Login from './components/login'
import Signup from './components/signup';
import Proute from './components/proute';

const Pro = () =>
  <Proute>
    <Route path='/view/:id' component={View} />
    <Route path='/edit/:id' component={Add} />
    <Route path='/add/' component={Add} />
    <Route path='/list/' component={List} />
  </Proute>

class App extends Component {
  render() {
    return (
      <div className="App shadow p-5">
        <Switch>
          <Route path='/signup/' component={Signup} />
          <Route path='/login/' component={Login} />
          <Route path='/' component={Pro} />
        </Switch>
      </div>
    );
  }
}

export default App;
