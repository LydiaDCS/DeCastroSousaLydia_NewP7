
import StarNotation from "../StarsNotation";


function LogementItem({ id, cover, title, sun, water }) {
  return (
    <li key={id} >
      <img src={cover} alt={`${title} cover`} />
      {title}
      <StarNotation noteType='light' noteValue={sun} />
      <StarNotation noteType='dark' noteValue={water} />
    </li>
  )
}

export default LogementItem