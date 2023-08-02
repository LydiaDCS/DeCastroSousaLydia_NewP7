import React from "react";
import { useParams } from "react-router";
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Logements({ logementtitle, cover, logementpicture, label, hosttitle, hostpicture }) {
  const { logementNumber } = useParams()
  const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;`

  const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border-radius: 20px 20px 20px 20px`


  const CardInfo = styled.div`
  background-color: red;
  border-radius: 20px 20px 20px 20px;
    `
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <h1>Logements</h1>
      <h2>Logement {logementNumber}</h2>
      <CardInfo>
        <img src={cover} alt="photologement" height={80} width={80} />
        <span>{logementtitle}</span>
        <CardImage src={logementpicture} alt="images du logements" />
        <CardLabel>{label}</CardLabel>
      </CardInfo>

      <div className="host">
        <div>{hosttitle}</div>
        <div>{hostpicture}</div>
      </div>
    </div>
  )
}

Logements.propTypes = {
  logementtitle: PropTypes.string,
  cover: PropTypes.string,
  logementpicture: PropTypes.string,
  label: PropTypes.string,
  hosttitle: PropTypes.string,
  hostpicture: PropTypes.string
}

export default Logements