import { useState } from "react";
import Counter from "../Counter";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana")
  }
  return (
    <div>
      <h1>State in React</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>change name</button>
      <Counter/>
    </div>
  );
}

export default App;
