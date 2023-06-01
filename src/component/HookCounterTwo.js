//usestate with previous state
import React, { useState } from "react";

function HookCounterTwo() {
    
    const initialCount = 0
    const[current,setCount] = useState(initialCount)
    return (
        <div>
            count : {current}
            <button onClick={()=> setCount(prevCount => prevCount+1)}>increment</button>
            <button onClick={() => setCount(prevCount=> prevCount -1)}>decrement</button>
            <button onClick={()=> setCount(initialCount)}>reset</button>
        </div>
    )
}

export default HookCounterTwo