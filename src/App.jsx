import { useState } from "react"

export default function App()
{

  const[gender,setGender]=useState("male")
  const[city,setCity]=useState("Delhi")
  return(
    <div>
      <h2>Handle Radio and Dropdown</h2>
      <h4>Select Gender: {gender}</h4>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)} 
       checked={gender=="male"} id="male" name="gender" value={"male"}/>
      <label htmlFor="male">Male</label>

      <input onChange={(event)=>setGender(event.target.value)} 
      checked={gender=="female"} type="radio" id="female" name="gender" value={"female"} />
      <label htmlFor="female">Female</label>
      

      <h2>select city: {city}</h2>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Delhi"}>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Gurugram">Gurugram</option>
      </select>
    </div>
  )
}