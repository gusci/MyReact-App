import React from 'react'
import MemoriesList from '../components/MemoriesList'
import Welcome from '../components/Welcome'
import AddButtonn from '../components/AddButton'
const Memories = ({Data}) => (
    <React.Fragment>
        <Welcome
            username="Gusci"
        />
        <MemoriesList 
            memories = {Data}
        />
        <AddButtonn />
    </React.Fragment>
)
export default Memories
