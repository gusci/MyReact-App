import React from 'react'
import Card from './Card'
import Memories from '../pages/Memories'

function MemoriesList(props){
    return(
        <div>
            { props.memories.map((memorie) => {
                return(
                    <Card 
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
}

export default MemoriesList