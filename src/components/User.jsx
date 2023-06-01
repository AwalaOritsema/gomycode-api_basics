export default function User(props) {
  return (
    <article className="user_card">
      <p>
        <span>Name</span> {props.name}
      </p>
      <p>
        <span>Username</span> {props.username}
      </p>
      <p>
        <span>Email</span> {props.email}
      </p>
      <p>
        <span>Phone</span> {props.phone}
      </p>
      <p>
        <span>Address</span>
        {props.address.street} {props.address.suite} {props.address.city}
      </p>
    </article>
  );
}
