import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Starred from './pages/Starred'


const App = () => {
    return (
        <Switch>
            <Route
                path='/'
                exact
            >
                <Home />
            </Route>
            <Route
                path='/starred'
                exact
            >
                <Starred />
            </Route>
            <Route>
                <div>
                    Not Found 404
                </div>
            </Route>
        </Switch>
    )
}

export default App