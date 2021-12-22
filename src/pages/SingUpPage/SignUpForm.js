import React from 'react'
import {InputsContainer} from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constantes/urls'
import { ButtonEstilizado } from '../FeedPage/styled'
import { goToFeed } from '../../routers/cordinator'
import { useState } from 'react'
import { CircularProgress } from '@material-ui/core'

const SignUpForm = () => {

    const history = useHistory()

    const [isLoading, setIsLoading] = useState (false)
    const [form, onChange, clear] = useForm({ username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp()
        clear()
        setIsLoading (true)
    }

    const singUp = () => {
        axios.post (`${BASE_URL}/users/signup`, form, {
            headers: {
                
                "Content-Type": "application/json"
            }
        })
        .then ((res) => {
            alert ('Cadastrado')
            localStorage.setItem('token', res.data.token)
            goToFeed(history) 
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }


    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>

                <TextField 
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"text"}
                    /> 
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"email"}
                    /> 

                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"password"}
                    /> 

                    <ButtonEstilizado
                        type={"subimit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Cadastre-se</>}
                    </ButtonEstilizado>
                </form>
            </InputsContainer>
        </div>
    )
}

export default SignUpForm