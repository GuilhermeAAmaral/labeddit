import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardEstilizado } from './styled';
import { useHistory} from 'react-router-dom';
import { goToPost } from '../../routers/cordinator';
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import DeleteIcon from '@material-ui/icons/Delete'
import { useEffect } from 'react';


const CardViewPost = (props) => {

    const history = useHistory()

    useEffect(() => {

        props.getPosts.getData()
    
      }, [])

    const body = {
        "direction": 1
    }

    const createPostVote = () => {

        axios.post (`${BASE_URL}/posts/${props.post.id}/votes`, body, {
            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')

            }
        })

        .then ((res) => {
            console.log (res)
            props.getPosts.getData()
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }

    const body2 = {
        "direction": -1
    }

    const changePostVote2 = () => {
       
        axios.put (`${BASE_URL}/posts/${props.post.id}/votes`, body2, {
            headers: {

                "Content-Type": "application/json",
                Authorization: localStorage.getItem ('token')

            }
        })

        .then ((res) => {
            console.log (res)
            props.getPosts.getData()
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }

    const deletePostVote = () => {
        axios.delete (`${BASE_URL}/posts/${props.post.id}/votes`, {
            headers: {

                Authorization: localStorage.getItem ('token')
            }
        })

        .then ((res) => {
            console.log (res)
            props.getPosts.getData()
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }


    const gooToPost = (id) => {
        goToPost(history, id)    
    }

    return (
    
    <CardEstilizado>
        <CardActionArea>
            <CardContent onClick={() => gooToPost (props.post.id)}>
                <Typography gutterBottom variant="h5" component="h2" color='primary'>
                {props.post.username} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.post.body}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button onClick={deletePostVote} size="small" color="primary">
                <DeleteIcon size="small" color="primary"></DeleteIcon>
                
            </Button>
            <Button onClick={createPostVote} size="small" color="primary">
               <ArrowUpwardIcon size="small" color="primary"></ArrowUpwardIcon>
            </Button>
            <Typography variant="body2" color="primary" component="p">
            {props.post.voteSum}
            </Typography>
            <Button onClick={changePostVote2} size="small" color="primary">
                <ArrowDownwardIcon size="small" color="primary"></ArrowDownwardIcon>
            </Button>
            <Typography variant="body1" color="primary" component="p">
            {props.post.commentCount}  
            </Typography>
            <CommentIcon size="small" color="primary"></CommentIcon>

        </CardActions>
   
    </CardEstilizado>   
 
    )
}

export default CardViewPost