import { useState } from "react"

export default function App()
{
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[address,setAddress]=useState("")
  return(
    <div>
      <h2>Get input field value</h2>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Your Name"/>
      <br /><br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Your Email"/>
      <br /><br />
      <input type="text" value={address} onChange={(event)=>setAddress(event.target.value)} placeholder="Enter Your Address"/>
      <br />
      <br />
      <button>submit</button>
      <button onClick={()=>{setName(""),setEmail(""),setAddress("")}}>clear</button>

      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{address}</h2>
    </div>
  )
}