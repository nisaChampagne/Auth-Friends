import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Login from './components/Login'
import FriendList from './components/FriendList'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='linkholder'>
        <Link to='/' className='links'>Login</Link>
        <Link to='/friendlist' className='links'>FriendList</Link>
        </div>     
        <div>
          <Route exact path='/'  render={props => {
            const token = localStorage.getItem("token");

            if (token) {
              return <Redirect to="/friendlist" />;
            }
            return <Login {...props} />;
          }}
          />
          <Route exact path='/friendlist'
              render={props => {
                const token = localStorage.getItem("token");
    
                if (!token) {
                  return <Redirect to="/" />;
                }
                return <FriendList {...props} />;
              }} />
        </div>
    </div>
    </Router>
  );
}

export default App;
