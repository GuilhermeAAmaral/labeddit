import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import { Button } from '@material-ui/core'

export const ContainerPrincipal = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`

export const CardEstilizado= styled(Card)`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 600px;
margin: 20px;
`

export const ButtonEstilizado = styled(Button)`
margin-top: 20px;
`