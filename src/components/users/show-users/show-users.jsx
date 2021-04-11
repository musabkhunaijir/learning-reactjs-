import { useState, useEffect } from "react";
import * as axios from "axios";

import "./show-users.css";

export function GetUsers() {
  let [usersFromJsonApi, setUsers] = useState([]);

  // fetch users from the API (effect)
  useEffect(() => {
    const fetchUsers = async () => {
      usersFromJsonApi = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(usersFromJsonApi.data);
    };

    fetchUsers();
  });

  let usersRowsData = [];
  usersFromJsonApi.map((user) => {
    usersRowsData.push(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
      </tr>
    );
  });

  return (
    <div id="users-component">
      <h3>All users:</h3>

      <div id="users-table">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
            </tr>
          </thead>

          <tbody>{usersRowsData}</tbody>
        </table>
      </div>
    </div>
  );
}
