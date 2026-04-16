import { useState } from "react"

export default function App()
{
  const[val,setVal]=useState("")
  return(
    <div>
      <h2>Get input field value</h2>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Your Name"/>
      <h2>{val}</h2>
      <button onClick={()=>setVal("")}>clear</button>
    </div>
  )
}