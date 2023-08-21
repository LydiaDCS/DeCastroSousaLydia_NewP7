import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from "../../Utils/style/colors"

function Card({ logementtitle }) {

  const CardInfo = styled.div`
  display: flex;
  justify-content:flex-end;
  padding: 15px;
  width: 340px;
  height: 340px;
  transition: 200ms;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
  background-color: ${colors.primary};
  transition-duration: 0.1s;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        
    }
    `
  const CardText = styled.span`
  color: #FFF;
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

}



export default Card