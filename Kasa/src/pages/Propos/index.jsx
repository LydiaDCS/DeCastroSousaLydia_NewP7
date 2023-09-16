import React, { useState } from "react"
import styled from 'styled-components'
import colors from "../../Utils/style/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
/*import { faChevronDown } from "@fortawesome/free-solid-svg-icons"*/

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
/*utiliser componentwillunmount ?*/
function Propos() {

  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Block>

        <TitleText onClick={handleClick}>Fiabilité <FontAwesomeIcon icon={faChevronUp} />
        </TitleText>

        {isOpen && (
          <Text >
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </Text>
        )}


        <TitleText onClick={handleClick}>Respect</TitleText>
        {isOpen && (
          <Text >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Text>
        )}

        <TitleText onClick={handleClick}>Service</TitleText>
        {isOpen && (
          <Text >
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Text>
        )}


        <TitleText onClick={handleClick}>Sécurité</TitleText>
        {isOpen && (
          <Text >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </Text>
        )}
      </Block>
    </div>
  )
}

export default Propos