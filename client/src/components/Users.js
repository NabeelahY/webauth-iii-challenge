import React, { useState, useEffect } from "react";
import auth from "../withAuth";
const Users = props => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    auth()
      .get("http://localhost:2000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => err);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/login");
    }
  }, []);

  useEffect(getUsers, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id} className="list">
          {user.username}
        </div>
      ))}
    </div>
  );
};

export default Users;
