import { useState, useEffect } from 'react'

const useFetch = url =>{
    const [data, SetData] = useState ([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMemories = async () =>{
            try{
                let res = await fetch(url)
                let data = await res.json()
                console.log(data)
                SetData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchMemories()
    }, [url])

    return {data,loading,error}
}
export default useFetch