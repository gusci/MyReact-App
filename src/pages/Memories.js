import React from 'react'
import MemoriesList from '../components/MemoriesList'
import Welcome from '../components/Welcome'
import AddButtonn from '../components/AddButton'
import Loading from '../components/Loading'
import NotFound from './500'
class Memories extends React.Component{
    state = {
        data : [],
        loading:true,
        error: null  
    }
    async componentDidMount(){
        await this.fetchMemories()
    }
    
    fetchMemories = async () =>{
        try{
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            console.log(data)
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        if(this.state.loading)
            return <Loading />
        if(this.state.error)
            return <NotFound />
        return(
            <div>
                <Welcome
                    username="Gusci"
                />
                <MemoriesList 
                    memories = {this.state.data}
                />
                <AddButtonn />
            </div>
        )
    }

}

export default Memories
