import React, { useEffect } from "react";
import dataCards from "../../../data/data.json";
import './cardDetails.scss';
import renderStars from "../renderStars/renderStars";
import Carousel from "../carousel/carousel";
import Collapse from "../collapse/collapse";
import { useParams, useNavigate } from 'react-router-dom';



/**
 * Cette fonction affiche les détails d'une carte de location de manière détaillée.
 * Elle récupère l'identifiant du log à afficher à partir de l'URL grâce à `useParams()`.
 * Elle recherche ensuite les informations du log correspondant dans `dataCards`.
 * Si le log est trouvé, elle affiche toutes les informations du log : une galerie d'images, le titre et l'emplacement du log, le nom et la photo de l'hôte, la note du log, une liste de tags associés, une section avec une description détaillée et une liste d'équipements.
 * Sinon, elle redirige vers la page Error.
 * @returns Le contenu de la page détaillée d'un log en fonction de son id.
 */
function CardsDetails() {
  // Récupère l'ID du log à afficher à partir de l'URL
  const { id } = useParams();

  // Recherche les informations du log correspondant dans `dataCards`
  const log = dataCards.find((log) => log.id === id);

  // Récupère l'objet `history` pour naviguer vers une autre page en cas d'erreur
  const history = useNavigate();

  // Vérifie si le log est valide et sinon, redirige l'utilisateur vers la page Error
  useEffect(() => {
    if (!log) {
      history(`/error`);
    }
  }, [history, log]);

  // Si le log est valide, affiche toutes les informations sur la page détaillée
  if (log) {
    return (
      <article className="card-details">
        <Carousel images={log.pictures} />
        <section className="title-location-host-rating">
          <div className="title-location">
            <h2 className="logs-title">{log.title}</h2>
            <div className="logs-location">{log.location}</div>
          </div>
          <div className="host-rating">
            <div className="logs-host">
              <p className="host-name">{log.host.name}</p>
              <img className="host-picture" src={log.host.picture} alt={log.host.name} />
            </div>
            <div className="rating"> {renderStars(log.rating)}</div>
          </div>
        </section>
        <div className="logs-tags">{
          log.tags.map((tags) =>
            <button key={tags}>{tags}</button>)
        }</div>
        <section className="homeCollapse">

          <div className="logs-description">
            <Collapse title="Description">
              <p>{log.description}</p>
            </Collapse>
          </div>
          <div className="logs-equipements">
            <Collapse title="Equipements">{log.equipments.map((equipement) =>
              <li key={equipement}>{equipement}</li>)}
            </Collapse>
          </div>
        </section>
      </article>
    );
  }
}
export default CardsDetails;
