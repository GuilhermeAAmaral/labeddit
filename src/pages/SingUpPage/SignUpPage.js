import React from 'react'
import { LogoImage, ScreenContainer } from './styled'
import logopreto from '../../assets/logopreto.png'
import SignUpForm from './SignUpForm'


const SignUpPage = () => {

    return ( 
        
        <ScreenContainer>
            <LogoImage src={logopreto} />
            <SignUpForm/>
        </ScreenContainer>
    )
}

export default SignUpPage