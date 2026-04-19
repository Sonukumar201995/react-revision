import User from "./User";

export default function App() {
  const userData = [
    { name: "sonu kumar", age: 30, email: "krsonu@gmail.com", id: 1 },
    { name: "monu kumar", age: 28, email: "krmonu@gmail.com", id: 2 },
    { name: "arun kumar", age: 30, email: "krarun@gmail.com", id: 3 },
  ];

  return (
    <div>
      <h2>Reuse loop in react js</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}
    </div>
  );
}
