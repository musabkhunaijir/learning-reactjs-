import { useState, useEffect } from "react";
import * as axios from "axios";

import "./show-users.css";
import { AddNewUser } from "../..";

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
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td id="options-column">
          <i className="fas fa-edit"></i>

          <a
            target="_blank"
            href={`https://jsonplaceholder.typicode.com/users/${user.id}`}
          >
            <i className="fas fa-info-circle"></i>
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div id="users-component">
      <AddNewUser />

      <h3>All users:</h3>

      <div id="users-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">...</th>
            </tr>
          </thead>

          <tbody>{usersRowsData}</tbody>
        </table>
      </div>
    </div>
  );
}
