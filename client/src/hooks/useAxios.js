import axios from 'axios'
import { useState, useEffect } from 'react'

axios.defaults.baseURL = 'http://localhost:4000'

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')
    const [loading, setloading] = useState(true)

    const fetchData = () => {
        axios
            .get('/files/data')
            .then((res) => {
                setResponse(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setloading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { response, error, loading }
}

export default useAxios