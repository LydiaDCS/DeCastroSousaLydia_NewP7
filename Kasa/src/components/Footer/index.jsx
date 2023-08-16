import styled from 'styled-components'
import logo from '../Assets/Logofooter.png'


function Footer() {

  const CardFooter = styled.h3`
  background-color: black;
  color:#FFFFFF;
width:auto;
display:flex;
flex-direction: column;
align-items: center;
padding: 5% 5% 1% 5%;
margin:0;


`
  const AppFooterLogo = styled.img`
  width: 122px;
  height: 39.444px;
  margin-bottom: 20px;
`
  const Footertext = styled.p`

width: 400px;
height: auto;


color: #FFFFFF;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 500;
`

  return (
    <CardFooter>
      <AppFooterLogo src={logo} alt="logo footer de l'application" />
      <Footertext>© 2020 Kasa. All rights reserved</Footertext>
    </CardFooter>
  )
}

export default Footer