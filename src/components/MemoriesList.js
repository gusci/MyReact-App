import React from 'react'
import Card from './Card'

const MemoriesList = ({memories}) => (
    <React.Fragment>
        { memories.map((memorie) => (
          
                <Card
                    key={memorie.id}
                    {...memorie}
                />
        ))}
    </React.Fragment>
)


export default MemoriesList