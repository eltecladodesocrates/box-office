import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

    const [input, setImput] = useState('')

    const onInputChange = (e) => {
        setImput(e.target.value)
    }

    return (
        <MainPageLayout>
            <input type='text' onChange={onInputChange} value={input} />
        </MainPageLayout>
    )
}

export default Home
