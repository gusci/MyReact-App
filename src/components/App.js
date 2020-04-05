import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Memories from '../pages/Memories'
import MemoriesNew from '../pages/MemoriesNew'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/memories"} component={Memories} />
            <Route exact path="/memories/new" component={MemoriesNew} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App