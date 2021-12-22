import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ContainerPrincipal } from './styled'
import ViewPost from './ViewPost'


const FeedPage = () => {

    useProtectedPage()

    return (

        <ContainerPrincipal>
            <ViewPost />
        </ContainerPrincipal>
    )
}

export default FeedPage