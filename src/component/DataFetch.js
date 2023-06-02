//fetching data with useEffect
//fetching data with condition
import React, { useState, useEffect } from "react";
import axios from 'axios'

function Datafetch() {

    const [posts, setPosts] = useState({})
    const[id,setId] = useState(1)
    const[idFromButton,setIdFromButton]= useState(1)

    const handleClick = ()=>{
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(Response => {
                console.log(Response);
                setPosts(Response.data)
            })
            .catch(error => {
                console.log(error);
            })
    },[idFromButton])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>fetch post</button>
            <ul>
                {
                    // posts.map(post =>(
                    //     <li key ={post.id}>
                    //         {post.title}
                    //     </li>
                    // ))
                    posts.title
                }
            </ul>

        </div>
    )
}

export default Datafetch