import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
margin-top: 7vh;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`

export const LoginFormContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
width: 80vw;
max-width: 450px;
margin-top: 20px;
`

export const LogoImage = styled.img`
width: 15vw;
max-width: 350px;
`
export const ButtonEstilizado = styled(Button)`
margin-top: 20px;
`