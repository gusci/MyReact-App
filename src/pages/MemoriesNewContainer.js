import React from 'react'
import '../components/styles/MemoriesNew.css'
import FatalError from './500'
import MemoriesNew from './MemoriesNew'
import url from '../config'

class MemoriesNewContainer extends React.Component{


    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading:false,
        error: null 
    }
   
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading:true
        })
        e.preventDefault()
        try {
            let datas = {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercises`,datas)
            let Json = await res.json()
            this.setState({
                loading:false
            })
            this.props.history.push("/memories")
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }
        
        console.log(this.state)
    }

    render(){
        if(this.state.error)
            return <FatalError />
        return <MemoriesNew 
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
    }
}

export default MemoriesNewContainer