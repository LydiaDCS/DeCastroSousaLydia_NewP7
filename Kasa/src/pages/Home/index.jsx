import React from "react";
import Card from "../../components/Cards";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { logementsCards } from "../../Données/index";

function Logements() {

  const CardLogement = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin:2% 3% 3% 3%;
  width: 1240px;
  background: #F6F6F6;
  padding:2% 3% 3% 3%;
  align-items:center;
  justify-content: center;
  border-radius: 20px 20px 20px 20px;
  @media(max-width:925px){
    grid-template-columns: auto 1fr auto;
  }
  `
  const TextCover = styled.p`
  width: 705px;
  height: 68px;
  top: 249px;
  left: 373px;
  font-size: 48px;
  font-weight: 500;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  z-index:1;
  background-image: url("../../Utils/Images/Cover.png");
  `
  const Band = styled.section`
  width: auto;
  height: 223px;
  top: 171px;
  left: 100px;
  z-index:-1;
  display:flex;
  justify-content:center;
  border-radius: 25px;
  opacity: 0.30000001192092896px;
  `
  const Body = styled.body`
  width:auto;
  height:100%;
  `

  return (
    <div>
      <Body>
        <Band>
          <TextCover>Chez vous, partout et ailleurs</TextCover>
        </Band>

        <CardLogement >
          {logementsCards.map((logement, index) => (
            <Link key={`logementsCards-${logement.id}`} to={`/logement/${logement.id}`} style={{ textDecoration: 'none' }}>
            <Card
              key={`${logement.id}-${index}`}
              logementtitle={logement.title}
            />

            </Link>
          ))}
        </CardLogement>
      </Body>
    </div >

  )
}

export default Logements