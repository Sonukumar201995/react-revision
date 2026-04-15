import { useState } from "react";
import User from "../User";

export default function App() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Toggle in React js</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>

      {/* {display ? <h1>Sonu Kumar</h1> : null} */}

      {
        display ? <User/>:null
      }
    </div>
  );
}