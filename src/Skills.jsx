import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <div>
      <h2>Select Skills</h2>
      <input onChange={handleSkills} type="checkbox" id="php" value="PHP" />
      <label htmlFor="php">PHP</label>
       <br />

      <input onChange={handleSkills} type="checkbox" id="java" value="JAVA" />
      <label htmlFor="java">JAVA</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="node" value="NODE" />
      <label htmlFor="node">NODE.JS</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="react" value="REACT" />
      <label htmlFor="react">REACT.JS</label>
      <br />

      <h2>{skills.toString()}</h2>
    </div>
  );
}
