import { useEffect, useState } from "react";

export default function Clock({ color }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      style={{
        color: color,
        background: "#000",
        width: "150px",
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h2>{time}</h2>
    </div>
  );
}