import React from 'react';
import { Link } from "react-router-dom";
import './cards.scss';

// Le composant Cards affiche une liste des cards, où l'on voit un apercu de chaque card qui contient une image, un titre et un lien cliquable vers les details de la card.

function Cards({ data }) {

  return (
    <>
      {data.map((logement) =>
        <div className="cardPreview" key={logement.id}>
          <Link to={`/logement/${logement.id}`} className="cardLink">
            <img src={logement.cover} alt={logement.title} className="cardCover" />
            <h2 className="cardTitle">{logement.title}</h2>
          </Link>
        </div>)
      }
    </>
  );
}


export default Cards;