import React, { useEffect } from "react";
import dataCards from "../../data/data.json";
import './cardDetails.scss';
import renderStars from "../../components/common/renderStars/renderStars";
import Carousel from "../../components/common/carousel/carousel";
import Collapse from "../../components/common/collapse/collapse";
import { useParams, useNavigate } from 'react-router-dom';


// La fonction CardsDetails affiche les détails d'une carte de location de manière détaillée.

function CardsDetails() {
  // Récupère l'ID du logement à afficher à partir de l'URL
  const { id } = useParams();

  // Recherche les informations du logement correspondant dans `dataCards`
  const logement = dataCards.find((logement) => logement.id === id);

  // Récupère l'objet `history` pour naviguer vers une autre page en cas d'erreur
  const history = useNavigate();

  // Vérifie si le logement est valide et sinon, redirige l'utilisateur vers la page Error
  useEffect(() => {
    if (!logement) {
      history(`/error`);
    }
  }, [history, logement]);

  // Si le logement est valide, affiche toutes les informations sur la page détaillée
  if (logement) {
    return (
      <article className="card-details">
        <Carousel images={logement.pictures} />
        <section className="title-location-host-rating">
          <div className="title-location">
            <h2 className="logement-title">{logement.title}</h2>
            <div className="logement-location">{logement.location}</div>
          </div>
          <div className="host-rating">
            <div className="logement-host">
              <p className="host-name">{logement.host.name}</p>
              <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="rating"> {renderStars(logement.rating)}</div>
          </div>
        </section>
        <div className="logement-tags">{
          logement.tags.map((tags) =>
            <button key={tags}>{tags}</button>)
        }</div>
        <section className="homeCollapse">

          <div className="logement-description">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
          </div>
          <div className="logement-equipements">
            <Collapse title="Equipements">{logement.equipments.map((equipement) =>
              <li key={equipement}>{equipement}</li>)}
            </Collapse>
          </div>
        </section>
      </article>
    );
  }
}
export default CardsDetails;
