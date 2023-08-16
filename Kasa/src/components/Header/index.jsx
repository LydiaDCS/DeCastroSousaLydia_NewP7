import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../Assets/Logo.png'


const StyledLink = styled(Link)`
    padding: 15px;
    color: #FF6060;
    text-decoration: none;
    font-size: 24px;
    color: #FF6060;
    font-weight: 500;
    font-family: Montserrat; /*permettre que ca saffiche*/
    &:hover {
      cursor: pointer;
      border-bottom: solid 2px;
  }
`
const HeaderNav = styled.nav`
grid-area: navbar;
display: flex;
justify-content:space-between;
align-items:center;
width: 1240px;
height: 68px;
top: 40px;
left: 100px;
padding:2% 5% 5% 5%;
`
const Nav = styled.div`
height: 34px;
flex-shrink: 0;`

function Header() {
  return (
    <HeaderNav>
      <img src={logo} className='App-logo' alt="logo de l' application" style={{ width: 210.322, height: 68 }} />
      <Nav>
        <StyledLink to="/" $isFullLink>Accueil</StyledLink>
        <StyledLink to="/Propos">A propos</StyledLink>
      </Nav>
    </HeaderNav>
  )
}

export default Header