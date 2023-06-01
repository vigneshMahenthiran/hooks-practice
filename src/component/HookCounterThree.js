//use statehook with object

import React, { useState } from "react";

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} />

            <input type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />

            <h1>
                firstName is - {name.firstName}
                lastName is - {name.lastName}
            </h1>
        </div>
    )

}

export default HookCounterThree