export default function User(props) {
  return (
    <article className="user_card">
      <p>{props.name}</p>
      <p>{props.username}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>
        {props.address.street} {props.address.suite} {props.address.city}
      </p>
    </article>
  );
}
