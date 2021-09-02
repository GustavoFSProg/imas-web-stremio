import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Botao, MenuContainer } from './style'
import { useHistory } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const history = useHistory()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenItem = () => {
    history.push('/dois')

    setAnchorEl(null)
  }

  const handleOpenItemTwo = () => {
    history.push('/')

    setAnchorEl(null)
  }

  return (
    <MenuContainer>
      <Botao aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <GiHamburgerMenu size="33" style={{ marginTop: '-5px' }} />
      </Botao>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenItemTwo}>Home</MenuItem>
        <MenuItem onClick={handleOpenItem}>Categorias</MenuItem>
        <MenuItem onClick={handleClose}>Produtos</MenuItem>
      </Menu>
    </MenuContainer>
  )
}
