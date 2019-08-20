import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import FriendList from './components/FriendList'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Link to='/'>Login</Link>
        {/* <Link to='/friendlist'>FriendList</Link> */}
        </div>     
        <div>
          <Route exact path='/' component={Login} />
          {/* <PrivateRoute exact path='/friendlist' component={FriendList}/> */}
        </div>
    </div>
    </Router>
  );
}

export default App;
