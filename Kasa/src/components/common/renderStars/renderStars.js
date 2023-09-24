import React from 'react';
import stars from '../../../assets/stars.svg';
import './renderStars.scss';

export default function renderStars(numStars) {
  //Tableau pour stocker les etoiles
  const starsArray = [];
  //boucle pour iterer sur le nombre d'etoiles
  //si i est inférieur à 5, on incrémente le tableau
  for (let i = 0; i < 5; i++) {
    //si i inférieur à numStars/ dataCards.rating alors on incremente le tableau avec une etoile orange sinon on incremente le tableau avec une etoile grise
    if (i < numStars) {
      starsArray.push(<img key={i} src={stars} alt="Full Star" />);
    } else {
      starsArray.push(<img key={i} src={stars} alt="Grey Star" style={{ filter: 'grayscale(100%)' }} />);
    }
  }
  return starsArray;
}
