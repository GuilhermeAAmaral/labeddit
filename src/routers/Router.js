import React from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SingUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { BrowserRouter, Route, Switch, useHistory, useParams } from 'react-router-dom'
import Header from '../componentes/Header'
import { BASE_URL } from '../constantes/urls'
import axios from 'axios'
import { useState } from 'react'
import { goToPost } from './cordinator'


const Router = () => {

    const history = useHistory()

    const [coments, setComents] = useState ([])

    const getPostComments = () => {
        axios.get (`${BASE_URL}/posts//comments`, {

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
    
    return (
        <BrowserRouter>
        <Header />
            <Switch>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/post/:id">
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
        
    )
}

export default Router