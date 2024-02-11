import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.login}`} className="user-list-item">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                {user.login}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
