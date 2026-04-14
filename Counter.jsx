import { useState } from "react"

export default function Counter()
{
    const [count,setCount]=useState(0);
    const [decreament,setDecreament]=useState(10);
    return(
        <div>
            <h1>Increament:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <h1>Decreament:{decreament}</h1>
            <button onClick={()=>setDecreament(decreament-1)}>Decreament</button>
        </div>
    )
}