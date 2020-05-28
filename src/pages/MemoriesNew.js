import React from 'react'
import MemoriesForm from '../components/MemoriesForm'
import Card from '../components/Card'

class MemoriesNew extends React.Component{


    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
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
            let res = await fetch('http://localhost:8000/api/exercises',datas)
            let Json = await res.json()
            console.log(Json)
        } catch (error) {
            
        }
        
        console.log(this.state)
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <MemoriesForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />            
                </div>
            </div>
        )
    }
}

export default MemoriesNew