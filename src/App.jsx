import { useState } from "react";
import Clock from "../Clock";

export default function App()
{
  const[color,setColor]=useState('green')
  return(
    <div>
      <h2>Digital Clock react js task props</h2>
      
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"green"}>green</option>
        <option value={"red"}>red</option>
        <option value={"yellow"}>yellow</option>
        <option value={"pink"}>pink</option>
      </select>
      <Clock color={color}/>
    </div>
  )
}