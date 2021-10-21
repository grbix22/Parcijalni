import React, { useState, useEffect } from "react";
import GitRepository from "../GitRepository";

export default function GitHubProfile() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((json) => setRepositories(json))
      .catch((error) => setError(error));
  });

  if (error !== null) {
    return <div>Error!</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  const handleOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <div>
          <div>
            <input
              className="GitHubProfile"
              placeholder="username"
              type="text"
              value={username}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" onClick={handleOnSubmit}>
            Search
          </button>
          <GitRepository data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
}
