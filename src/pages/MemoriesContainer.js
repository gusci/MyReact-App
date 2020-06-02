import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Memories from './Memories'
import useFetch from '../hooks/useFetch'
import url from '../config'
const MemoriesContainer = () =>{
    const {data,loading,error} = useFetch (`${url}/exercises`)
    
    if(loading)
            return <Loading />
    if(error)
            return <FatalError />
    return<Memories 
            Data={data}
    />
}
export default MemoriesContainer