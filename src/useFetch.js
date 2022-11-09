import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error(`Couldn't fetch data from this resource.`)
                }
                return response.json()
            })
            .then(json => {
                setData(json)
                setMessage(false)
            })
            .catch(error => {
                setMessage(error.message)
            })
        }, 1000)
    }, [url])

    return { data, message }
}

export default useFetch