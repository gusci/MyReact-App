import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MemoriesNewContainer from '../pages/MemoriesNewContainer'
import NotFound from '../pages/NotFound'
import MemoriesContainer from '../pages/MemoriesContainer'
import Example from '../pages/Example'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Example} />
            <Route exact path={"/memories"} component={MemoriesContainer} />
            <Route exact path="/memories/new" component={MemoriesNewContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App