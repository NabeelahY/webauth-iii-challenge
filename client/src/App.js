import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
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
        </nav>
      </div>
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
