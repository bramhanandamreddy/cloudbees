import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <p>Company: {user.company || "N/A"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  );
};

export default UserDetails;
