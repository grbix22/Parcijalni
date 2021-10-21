import React from "react";

export default function GitRepository({ data, repositories }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.avatar_url}</td>
          <td>{!data.name}</td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td>
            {repositories.map((repo) => (
              <div key={repo.name}>
                <div>
                  <div>
                    <a href={repo.html_url}>{repo.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
