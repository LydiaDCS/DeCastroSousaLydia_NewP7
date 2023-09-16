import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

function LogementItem({ id, cover, title, description }) {
  return (
    <li key={id} >
      <img src={cover} alt={`${title} cover`} />
      {title}
      <div>{description}</div>
      <FontAwesomeIcon icon={faStar} />
    </li>
  )
}

export default LogementItem