export default function App() {
  const userData = [
    { name: 'sonu kumar', age: 30, email: 'krsonu@gmail.com', id: 1 },
    { name: "monu kumar", age: 28, email: 'krmonu@gmail.com', id: 2 },
    { name: 'arun kumar', age: 30, email: 'krarun@gmail.com', id: 3 }
  ];

  return (
    <div>
      <h2>jsx loop in react js</h2>
      <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}