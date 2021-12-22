import React from 'react'
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import { Button } from '@material-ui/core'
import logopreto from '../../assets/logopreto.png'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSingUp } from '../../routers/cordinator'



const LoginPage = () => {


    const history = useHistory()
    return ( 
        
        <ScreenContainer>
            <LogoImage src={logopreto} />
            <LoginForm />
            
            <SignUpButtonContainer>
                <Button onClick={()=> goToSingUp (history)}
                    type={"subimit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se!
                </Button>
                </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage