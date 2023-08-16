import PropTypes from 'prop-types'
import styled from 'styled-components'

function Card({ logementtitle, cover, logementpicture, label, hosttitle, hostpicture }) {





  const CardInfo = styled.div`
  display: flex;
    justify-content:flex-end;
    padding: 15px;
    width: 340px;
    height: 340px;
    transition: 200ms;
    border-radius: 10px;
   
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
background-color: #FF6060;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
    `
  const CardText = styled.span`
    color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;`


  return (
    <div style={{
      padding: 10
    }}>
      <CardInfo style={{ display: 'flex', flexDirection: 'column', padding: 30 }}>
        <CardText>{logementtitle}</CardText>
      </CardInfo>


    </div>
  )
}

Card.propTypes = {
  logementtitle: PropTypes.string,
  cover: PropTypes.string,
  logementpicture: PropTypes.string,
  label: PropTypes.string,
  hosttitle: PropTypes.string,
  hostpicture: PropTypes.string
}



export default Card