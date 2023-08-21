import React from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import colors from "../../Utils/style/colors"

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      border-bottom: solid 2px;
  }`

const ErrorNumber = styled.h1`
font-size: 288px;
font-weight: 700;
margin:50px;
`
const TextError = styled.h3`
font-size: 36px;
font-weight: 500;
padding-bottom: 150px;
`
const BodyError = styled.div`
letter-spacing: 0em;
text-align: center;
color: ${colors.primary};
padding-bottom: 100px;
`

function Error() {
  return (
    <BodyError>
      <ErrorNumber>404</ErrorNumber>
      <TextError>Oups! La page que vous demandez n'existe pas.</TextError>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </BodyError>
  )
}

export default Error