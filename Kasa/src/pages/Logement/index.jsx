import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { logementsCards } from "../../Données"
import LogementItem from "../../components/LogementItem";

/*
<FontAwesomeIcon icon="fa-duotone fa-chevron-up" />
<FontAwesomeIcon icon="fa-duotone fa-chevron-down" />
<FontAwesomeIcon icon="fa-duotone fa-star" />*/
function Logement() {

  const { id: queryId } = useParams()
  const [logementData, setLogementData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/logement?id=${queryId}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLogementData(jsonResponse?.logementsCards)
      })
  }, [queryId])

    const {
    id,
    title,
    cover,
    sun,
    water
  } = logementData

  return (
    <div>
      <div>
        {logementsCards.map(({ id, title, cover, sun, water }) => (
          <LogementItem
            id={queryId}
            cover={cover}
            title={title}
            sun={sun}
            water={water}

          />
        ))}
      </div>
      <h1>title: {title}</h1>
      <h1>logement: {id}</h1>
      <h3>description: {cover}</h3>
      <h3>star: {sun}</h3>
      <h3>star: {water}</h3>
    </div>
  )
}


export default Logement