import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardEstilizado, ButtonEstilizado} from './styled';
import axios from 'axios';
import {BASE_URL} from '../../constantes/urls'
import { TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useForm from '../../hooks/useForm';


const CardPostComentarios = (props) => {

    useProtectedPage()

    const [form, onChange, clear] = useForm({body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log (form)
        createComment(params)  
        clear()   
    }
    
    const params = useParams()

    const createComment = (params) => {
        
        axios.post (`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')

            }
        })

        .then ((res) => {
            console.log (res)
            props.getcoments.getData()
        })
        .catch((err)=> {
            console.log (err)
        })
    }

    return (

        <CardEstilizado>
            <CardActionArea>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Faça um comentário
                    </Typography>

                    <form onSubmit={onSubmitForm}>
                    <TextField 
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    variant={"standard"}
                    fullWidth
                    margin ={'normal'}
                    required
                    /> 
                    <ButtonEstilizado 
                    size="small" 
                    color="primary" 
                    type={'subumit'}>
                    Comentar
                    </ButtonEstilizado>
                    </form>
                </CardContent>
                
                
            </CardActionArea>

        </CardEstilizado>

    )
}
export default CardPostComentarios