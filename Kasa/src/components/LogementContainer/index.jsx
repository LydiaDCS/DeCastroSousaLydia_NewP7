import { useParams } from 'react-router-dom'
import Logement from '../../pages/Logement'

function LogementContainer() {
  const { id } = useParams()
  return <Logement id={id} />
}

export default LogementContainer
