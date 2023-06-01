//working with use effect

import React , {useState , useEffect} from "react";

function EffectCounter(){

    const[count ,setCount] = useState(0)

    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
    return(
        <div>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}> click {count} times</button>
        </div>
    )

}

export default EffectCounter