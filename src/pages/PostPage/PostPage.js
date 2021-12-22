import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ContainerPrincipal } from '../FeedPage/styled';
import { useParams } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constantes/urls';
import CardPostPage from './CardPostPage';
import CardPostComentarios from './CardPostComentarios';
import { CardContent } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardEstilizado } from './styled';


const PostPage = () => {

    useProtectedPage()
    
    const params = useParams()
    console.log (params)

    const getcoments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log ('aqui', getcoments)

    const comentariosNaTela = getcoments.data.map ((coment) => {
        return <CardPostPage key={coment.id} coment={coment} getcoments={getcoments}/>
    })

    const getPosts = useRequestData ([], `${BASE_URL}/posts`)
    console.log ('chegou', getPosts)

    const filterPosts = getPosts.data.filter ((post) => {
        return post.id === params.id
    })

    console.log ('filtro', filterPosts)

    return (
        <ContainerPrincipal>
    
            <CardEstilizado>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color='primary'>
                    {filterPosts && filterPosts[0] && filterPosts[0].username}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    {filterPosts && filterPosts[0] && filterPosts[0].body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </CardEstilizado>
            <CardPostComentarios getcoments={getcoments}/>
            {comentariosNaTela}
            
        </ContainerPrincipal>
    )
}

export default PostPage