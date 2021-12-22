import { useEffect, useState } from "react";
import axios from 'axios'



const useRequestData = (initialData, url) => {

    const [data, setData] = useState(initialData)

    const getData = () => {
        axios.get (url, {
            headers: {
                Authorization: localStorage.getItem ('token')
            }
        })
        .then ((res) => {
            setData (res.data)
            
            
        })

        .catch ((err) => {
            console.log (err)
            alert ('Ocorreu um erro, tente novamente')
        })
    }

    useEffect (() => {  
     getData()   
    }, [url])

    return {data, getData}
}

export default useRequestData