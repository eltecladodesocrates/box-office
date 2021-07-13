import React, { useState, useEffect } from 'react'

const HookUseEffect = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('Use effect');
    })
    console.log('rendering ...');

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
        </div>
    )
}

export default HookUseEffect