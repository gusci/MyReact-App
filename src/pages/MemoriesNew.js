import React from 'react'

class MemoriesNew extends React.Component{

    handleClick = () => {
        console.log('click')
    }

    render(){
        return(
            <button onClick={this.handleClick} >
                send
            </button>
        )
    }
}

export default MemoriesNew