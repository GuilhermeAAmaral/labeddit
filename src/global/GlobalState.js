import React from 'react'
import GlobalContext from './GlobalContext'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../constantes/urls'
import { goToPost } from '../routers/cordinator'

const GlobalState = (props) => {

    const [coments, setComents] = useState ([])
    const history = useHistory()

    const getPostComments = () => {
        axios.get (`${BASE_URL}/posts/${props.post.id}/comments`, {

            headers: {
                Authorization: localStorage.getItem ('token')
            }
        })
        .then ((res) => {
            console.log (res.data)
            setComents (res.data)
            goToPost(history)
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const state = {coments}
    const setters = {setComents}
    const requests = {getPostComments}

    return(
        <GlobalContext.Provider value={{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState