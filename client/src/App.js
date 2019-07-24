import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>Hello!</div>
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
      <Route path="/register" />
    </Router>
  );
}

export default App;
