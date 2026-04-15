export default function User({ name, age, email, address }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}
