import { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
      },
    },
  ]);

  return (
    <main className="app">
      <h1>Users</h1>

      <UsersList users={users} />
    </main>
  );
}

export default App;
