import React, { useState } from "react";
import styled from 'styled-components'
import colors from "../../Utils/style/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Text = styled.div`
font-size: 24px;
font-weight: 400;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
background-color: ${colors.secondary};
color: ${colors.primary};
border-radius: 5px;
padding:0px 0px 20px 10px;
margin: 30px 30px 30px 0px;
`
const TitleText = styled.h3`
font-size: 24px;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
background-color: ${colors.primary};
color: white;
cursor: pointer;
border-radius: 5px;
padding:10px 0px 10px 10px;
margin: 0px  0px 0px -10px;
`
const Block = styled.div`
padding: 10%;
`

function Propos() {

  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div>
      <Block>
        <Text>
          <TitleText onClick={() => setIsOpen(false)}>Fiabilité
        </TitleText>
          <FontAwesomeIcon onClick={() => setIsOpen(false)} icon="fa-duotone fa-chevron-down" />
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
        </Text>
        <Text>
          <TitleText onClick={() => setIsOpen(false)}>Respect</TitleText>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Text>
        <Text>
          <TitleText onClick={() => setIsOpen(false)}>Service</TitleText>
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Text>
        <Text>
          <TitleText onClick={() => setIsOpen(false)}>Sécurité</TitleText>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </Text>
      </Block>
    </div>
  ) : (<TitleText onClick={() => setIsOpen(true)}>Fiabilité
  </TitleText>)


}

export default Propos