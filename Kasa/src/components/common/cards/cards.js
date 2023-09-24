import React from 'react';
import { Link } from "react-router-dom";
import './cards.scss';

/**
 * Ce composant Cards affiche une liste de cartes, où chaque carte contient une image, un titre et un lien cliquable. Les données de chaque carte sont passées en tant que "prop" sous forme d'un tableau d'objets "data", qui est parcouru à l'aide de la méthode ".map()" pour créer des composants enfants pour chaque objet. Chaque composant enfant est ensuite affiché dans une div avec une classe "cardPreview", et contient une image avec une source dynamique basée sur "log.cover", un titre avec un texte dynamique basé sur "log.title", et un lien cliquable avec un URL dynamique basé sur "log.id". La clé unique pour chaque composant enfant est basée sur "log.id". 
 */
function Cards({ data }) {

  return (
    <>
      {data.map((log) =>
        <div className="cardPreview" key={log.id}>
          <Link to={`/logement/${log.id}`} className="cardLink">
            <img src={log.cover} alt={log.title} className="cardCover" />
            <h2 className="cardTitle">{log.title}</h2>
          </Link>
        </div>)
      }
    </>
  );
}


export default Cards;