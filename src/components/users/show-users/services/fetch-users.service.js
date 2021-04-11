import * as axios from "axios";

const fetchUsers = async () => {
  const usersFromJsonApi = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return usersFromJsonApi.data;
};

export { fetchUsers };
