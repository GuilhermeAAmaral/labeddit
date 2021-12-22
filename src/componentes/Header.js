import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar, Img } from './styled'
import { useHistory } from 'react-router'
import logobranco from '../assets/logobranco.png'
import { goToFeed } from '../routers/cordinator'

const Header = () => {

    const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
            <Button onClick={() => goToFeed(history)} color="inherit"><Img src={logobranco}/>LabEddit</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header