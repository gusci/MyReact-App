import React from 'react'
import Card from './Card'

const MemoriesList = ({memories}) => (
    <div>
        { memories.map((memorie) => {
            return(
                <Card
                    key={memorie.id}
                    title={memorie.title}
                    description={memorie.description}
                    img={memorie.img}
                    leftColor={memorie.leftColor}
                    rightColor={memorie.rightColor}
                />
            )
        })}
    </div>
)


export default MemoriesList