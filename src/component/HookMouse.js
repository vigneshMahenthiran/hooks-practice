//run effect only once
import React ,{useEffect ,useState} from "react";

function HookMouse(){
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('log mouse position');
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(()=>{
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return(
        <div>
            hooks x -{x}  y -{y}
        </div>
    )

}

export default HookMouse