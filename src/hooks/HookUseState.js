import React, { useState } from 'react'

// function HookUseState() {

//------------------- TEXT STATE --------------------

// const [text, setText] = useState('Random Title')

// const handleClick = () => {
//     text === 'Random Title' ? setText('Hola Edmundo') : setText('Random Title')
// }

// ------------------- ARRAY STATE --------------------

// const [people, setPeople] = useState([
//     { id: 1, name: 'Jonh' },
//     { id: 2, name: 'Peter' },
//     { id: 3, name: 'Susan' },
//     { id: 4, name: 'Anna' }
// ])

// const handleRemovePerson = (personId) => {
//     const filteredPeople = people.filter(({ id }) => id !== personId)
//     setPeople(filteredPeople)
// }

// return (
//     <React.Fragment>
//         {people.map(({ id, name }) => {
//             return (
//                 <div key={id}>
//                     <p>{name}</p>
//                     <button onClick={() => handleRemovePerson(id)}>Remove</button>
//                 </div>
//             )
//         })}
//     </React.Fragment>
// )
// }

const Counter = () => {

    const [value, setValue] = useState(0)

    const handleIncrease = () => {
        // we can use prevState, it works asyncronous
        setValue((prevState) => prevState + 1)
    }

    const handleDecrease = () => {
        setValue(value - 1)
    }

    const handleReset = () => {
        setValue(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{value}</h2>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}



export default Counter
