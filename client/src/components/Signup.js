import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userData, setUser] = useState({
    username: "",
    department: "",
    password: ""
  });

  const userSignup = user => {
    const { username, department, password } = user;
    return axios
      .post("http://localhost:2000/api/auth/register", {
        username,
        department,
        password
      })
      .then(res => res)
      .catch(err => err);
  };

  return (
    <form onSubmit={() => userSignup(userData)}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={e => setUser({ ...userData, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        value={userData.department}
        onChange={e => setUser({ ...userData, department: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={e => setUser({ ...userData, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
