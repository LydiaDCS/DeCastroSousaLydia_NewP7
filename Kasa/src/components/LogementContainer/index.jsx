import { useParams } from 'react-router-dom'
import Logement from '../../pages/Logement'
import PropTypes from 'prop-types'


function LogementContainer(title, cover, pictures, description, hostName, hostPicture, rating, location, equipments, tags) {
  const { id } = useParams()
  return (
    <div>
      <Logement id={id} />
    </div>
  )
}
LogementContainer.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.string,
  description: PropTypes.string,
  hostName: PropTypes.string,
  hostPicture: PropTypes.string,
  rating: PropTypes.string,
  location: PropTypes.string,
  equipments: PropTypes.string,
  tags: PropTypes.string,
}

export default LogementContainer
