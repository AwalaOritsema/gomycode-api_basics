import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import axios from "axios";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers((prev) => [...prev, ...users]);
    });
  }, []);

  return (
    <main className="app">
      <h1>Users</h1>

      <UsersList users={users} />
    </main>
  );
}

export default App;
