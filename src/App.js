// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Luo from './components/luo.component';
import Muokkaa from './components/muokkaa.component';
import Listaa from './components/listaa.component';




class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Database example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Form</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">List of DB</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to the Database Example</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Luo } />
              <Route path='/edit/:id' component={ Muokkaa } />
              <Route path='/index' component={ Listaa } />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
