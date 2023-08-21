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
`
const TitleText = styled.h3`
font-size: 24px;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
color: ${colors.primary}
`


function Propos() {

  const [isOpen, setOpen] = useState(true);
  return (
    <div>
      <div>

        <TitleText onClick={() => setOpen(!isOpen)}>Fiabilité
        </TitleText>
        <FontAwesomeIcon onClick={() => setOpen(!isOpen)} icon="fa-duotone fa-chevron-down" />
      </div>
      <Text>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
      </Text>
      <TitleText>Respect</TitleText>
      <Text>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </Text>
      <TitleText>Service</TitleText>
      <Text>
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
      </Text>
      <TitleText>Sécurité</TitleText>
      <Text>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </Text>
    </div>)
}

export default Propos