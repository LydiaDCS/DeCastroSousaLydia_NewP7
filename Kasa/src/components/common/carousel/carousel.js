import React, { useState } from 'react';
import './carousel.scss';
import precedentIcon from '../../../assets/precedent.svg';
import suivantIcon from '../../../assets/suivant.svg';

// La fonction Carousel affiche une galerie d'images sous forme de carrousel

function Carousel({ images }) {

  // Etat local pour stocker l'indice de l'image affichée, initialisé à 0.
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  // Fonction pour afficher l'image suivante dans le carrousel
  const suivanteImage = () => {
    // Si on est arrivé à la fin du tableau (dernière image), on retourne à l'indice 0, sinon on incrémente simplement l'indice de 1
    setcurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  // Fonction pour afficher l'image précédente dans le carrousel
  const precedenteImage = () => {
    // Si on est au début du tableau (1ère image), on retourne à l'indice de la dernière image du tableau, sinon on décrémente simplement l'indice de 1
    setcurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  //Condition s'il y a plus d'une image alors affichage des buttons precedent et suivant pour defiler les images sinon pas de buttons

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-button precedent" onClick={precedenteImage}>
          <img src={precedentIcon} alt="precedent" />
        </button>
      )}
      <img src={images[currentImageIndex]} alt="carousel-images" />
      {images.length > 1 && (
        <button className="carousel-button suivant" onClick={suivanteImage}>
          <img src={suivantIcon} alt="suivant" />
        </button>
      )}
    </div>
  );
}

export default Carousel;