import { useState } from "react";

export default function Student({ name }) {

  const [student, setStudent] = useState(name); 

  return (
    <div>
      <h1>Props with onClick Events</h1>

      <h2>Student: {student}</h2>

      <button onClick={() => setStudent("Bhaskar")}>
        Update
      </button>
    </div>
  );
}