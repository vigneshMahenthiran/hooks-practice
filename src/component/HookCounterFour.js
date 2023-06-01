//use state with array

import React, { useState } from "react";

function HookCounterFour() {

    const [items, setItem] = useState([])

    const addItem = ()=>{
        setItem([...items, {
            id : items.length,
            value : items.length
        }])
    }
    return (
        <div>
            <button onClick={addItem}>add number</button>
            <ul>
                {
                    items.map( item => <li key="item.id"> {item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour