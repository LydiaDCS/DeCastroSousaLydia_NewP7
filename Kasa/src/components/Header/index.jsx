import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    color: red;
    text-decoration: none;
    font-size: 18px;
    :hover{
      border-top: solid red;
    }
`
const HeaderNav = styled.nav`
grid-area: navbar;
display: flex;
justify-content:space-around;
align-items:center;
padding-left: 5%;
padding-right: 5%;
`

function Header() {
  return (
    <HeaderNav>
      <h1> Kasa</h1>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Logements/{:id}">A propos</StyledLink>
      </div>
    </HeaderNav>
  )
}

export default Header