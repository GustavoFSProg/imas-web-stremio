import { FaFilm } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Header, HeaderContainer, HeaderText } from './styles'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <img
            src={logo}
            alt="Logo"
            width="106"
            style={{ marginTop: '-25px', marginRight: '32px' }}
          />

          <Link to="/dois" style={{ textDecoration: 0 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Painel</HeaderText>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: 0 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
                marginLeft: '-10px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Home</HeaderText>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: 0 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
                marginLeft: '-10px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Séries</HeaderText>
            </div>
          </Link>
        </HeaderContainer>
      </Header>
    </>
  )
}

export default Navbar
