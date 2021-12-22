import React, { useState } from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { ContainerPrincipal, CardEstilizado, ButtonEstilizado } from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constantes/urls'


const CreatePost = (props) => {
    
    const [form, onChange, clear] = useForm({ title: "", body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log (form) 
        createPost()   
        clear()  
    }

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {

            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')
            }
        })
        .then ((res) => {
            console.log (res)
            props.getPosts.getData()
        })
        .catch((err)=> {
            console.log (err.data)
        })
    }

  

  return (
    <ContainerPrincipal>  
        <CardEstilizado>
            <CardActionArea>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Crie o seu Post
                    </Typography>

                    <form onSubmit={onSubmitForm}>
                    <TextField 
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    variant={"standard"}
                    label={'Titulo'}
                    fullWidth
                    margin ={'normal'}
                    required
                    /> 
                    <TextField 
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    variant={"standard"}
                    label={'Escreva o seu Post'}
                    fullWidth
                    margin ={'normal'}
                    required
                    /> 

                    <ButtonEstilizado 
                    size="small" 
                    color="primary" 
                    type={'subumit'}>
                    Postar
                    </ButtonEstilizado>
                    </form>
                </CardContent>
                
                
            </CardActionArea>

        </CardEstilizado>
       
    </ContainerPrincipal>
    
  );
}

export default CreatePost