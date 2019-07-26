import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Users from "./components/Users";

function App(props) {
  const logout = () => {
    localStorage.clear();
    return props.history.push("/login");
  };

  return (
    <div>
      <div className="App">
        <nav>
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          <NavLink to="/register">
            <div>Register</div>
          </NavLink>
          <NavLink to="/login">
            <div>Login</div>
          </NavLink>
          <div onClick={() => logout()}>Logout</div>
        </nav>
        <Route exact path="/" component={Users} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
}

export default withRouter(App);
