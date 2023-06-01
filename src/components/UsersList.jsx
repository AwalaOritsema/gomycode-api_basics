import User from "./User";

export default function UsersList(props) {
  return (
    <div className="users_list">
      {props.users.map((user) => (
        <User key={user.username} {...user} />
      ))}
    </div>
  );
}
