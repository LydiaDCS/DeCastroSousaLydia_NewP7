import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { logementsCards } from "../../Données/index";
import LogementItem from "../../components/LogementItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "../../Utils/Loader";
/*import { Component } from "react";*/

function Logement() {
  const [isDataLoading, setDataLoading] = useState(false)
  const { id } = useParams()
  const [logementData, setLogementData] = useState({})

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:3000/logement?${id}`)
      .then((response) => response.json())
      .then((jsonReponse) => {
        setLogementData(jsonReponse?.logementData)
      })
      .catch((error) => console.log(error))
    setDataLoading(false)

  }, [id])

  const {
    title,
    cover,
    description,
  } = logementData

  return (
    <div>
      <div>
        {isDataLoading ? (
          <Loader />
        ) : (
          <div>logementData</div>
        )}
        {logementsCards.map(({ title, cover, description }) => (
          <LogementItem
            id={id}
            cover={cover}
            title={title}
            description={description}

          />
        ))}
      </div>
      <h1>title: {title}</h1>
      <h1>logement: {id}</h1>
      <h3>description: {description}</h3>
      <h3>photo: {cover}</h3>
      <FontAwesomeIcon icon={faStar} />
    </div>
  )
}


export default Logement

/*class Logement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logementData: {},
    }
  }
  componentDidMount() {
    const { id } = this.props
    logementData ne retourne rien pq?
    fetch(`http://localhost:3000/logement?${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ logementData: jsonResponse?.logementsCards })
      })
  }

  render() {
    const { id } = this.props
    const { logementData } = this.state
    const { title, cover, description } = logementData;

    return (
      <div>
        <h1>Logement : {id}</h1>
        <img src={cover} alt={title} />
        <div>{logementData}</div>
        <div>{description}</div>
      </div>
    )
  }
}

export default Logement*/