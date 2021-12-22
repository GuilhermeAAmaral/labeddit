import React from 'react'
import { ScreenContainer } from './styled'
import { LogoImage } from './styled'
import logopreto from '../../assets/logopreto.png'
import { ButtonContainer } from './styled'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const ErrorPage = () => {

    return (

        <ScreenContainer>
            <LogoImage src={logopreto} />
            <Typography gutterBottom variant="h4" component="h2" color='primary'>
                Página não encontrada!
            </Typography>
        </ScreenContainer>
    )
}

export default ErrorPage