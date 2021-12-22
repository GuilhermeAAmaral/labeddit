import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardEstilizado } from './styled';
import axios from 'axios';
import {BASE_URL} from '../../constantes/urls'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import DeleteIcon from '@material-ui/icons/Delete';


const CardPostPage = (props) => {

    useProtectedPage()

    const createCommentVote = () => {
        const body = {
            "direction": 1
        }
        axios.post (`${BASE_URL}/comments/${props.coment.id}/votes`, body, {
            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')

            }
        })

        .then ((res) => {
            console.log (res)
            props.getcoments.getData()
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    const body3 = {
        "direction": -1
    }

    const changeCommentVote2 = () => {
       
        axios.put (`${BASE_URL}/comments/${props.coment.id}/votes`, body3, {
            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')

            }
        })

        .then ((res) => {
            console.log (res)
            props.getcoments.getData()
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    const deleteCommentVote = () => {
        axios.delete (`${BASE_URL}/comments/${props.coment.id}/votes`, {
            headers: {

                Authorization: localStorage.getItem ('token')
            }
        })

        .then ((res) => {
            console.log (res)
            props.getcoments.getData()
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    
    return (
        
        <CardEstilizado>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color='primary'>
                    {props.coment.username}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.coment.body}
                </Typography>
            </CardContent>
        </CardActionArea>
        
        <CardActions>
            <Button onClick={deleteCommentVote} size="small" color="primary">
                <DeleteIcon size="small" color="primary"></DeleteIcon>
            </Button>
            <Button onClick={createCommentVote}size="small" color="primary">
                <ArrowUpwardIcon size="small" color="primary"></ArrowUpwardIcon>
            </Button>
            <Typography variant="body2" color="primary" component="p">
            {props.coment.voteSum}  
            </Typography>
            <Button onClick={changeCommentVote2}size="small" color="primary">
                <ArrowDownwardIcon size="small" color="primary"></ArrowDownwardIcon> 
            </Button>
        </CardActions>
        </CardEstilizado>
    
    )
}

export default CardPostPage