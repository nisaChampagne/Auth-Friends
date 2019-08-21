import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from './components/PrivateRoute'
import "./App.css";

function App() {
  return (
    <Router>
      {/*Router needs to wrap links and routes*/}
      <div className="App">
        <div className="linkholder">
          {/*   links to each page*/}
          <Link to="/" className="links">
            Login
          </Link>
          {/*   links to each page*/}
          <Link to="/friendlist" className="links">
            FriendList
          </Link>
        </div>
        <div>
          <Route
            exact
            path="/"
            render={props => {
              const token = localStorage.getItem("token");
              /* getting the token form localStorage and setting it accessible to token*/

              if (token) {
                /*if token is present, will redirect to friendlist, otherwise back to login page you go*/
                return <Redirect to="/friendlist" />;
              }
              return <Login {...props} />;
            }}
          />
          <PrivateRoute
            exact
            path="/friendlist"
            component={FriendList}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
