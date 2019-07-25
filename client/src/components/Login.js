import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [userData, setUser] = useState({
    username: "",
    password: ""
  });

  const userLogin = user => {
    const { username, password } = user;
    return axios
      .post("http://localhost:2000/api/auth/login", {
        username,
        password
      })
      .then(res => res)
      .catch(err => err)
      .finally(() => props.history.push("/"));
  };

  return (
    <form onSubmit={() => userLogin(userData)}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={e => setUser({ ...userData, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={e => setUser({ ...userData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
