import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = ({ url, method, data = null, config = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
console.log("err------",error)
    useEffect(() => {
        const fetchData = async () => {
            axios({
                method: method,
                url: url,
                data: data
            })
            .then(res => setResponse(res.status))
            .catch(err => {
                setError(err)})
            .finally(() => setIsLoading(false))
        }
        fetchData()
        
    },[url, method, data, config])

    return { response, error, isLoading }
    
}

export default useApi
