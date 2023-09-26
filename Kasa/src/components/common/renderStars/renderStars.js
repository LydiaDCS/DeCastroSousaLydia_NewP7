import React from 'react';
import stars from '../../../assets/stars.svg';
import './renderStars.scss';


// La fonction renderStars affiche le nombre d'étoiles sur 5 des hôtes des appartements.

export default function renderStars(rating) {
  //Tableau pour stocker les etoiles
  const starsArray = [];
  //boucle pour iterer sur le nombre d'etoiles
  //si i est inférieur à 5, on incrémente le tableau
  for (let i = 0; i < 5; i++) {
    //si i inférieur à rating alors on incremente le tableau avec une etoile orange sinon on incremente le tableau avec une etoile grise jusqu'au chiffre 5
    if (i < rating) {
      starsArray.push(<img key={i} src={stars} alt="Full Star" />);
    } else {
      starsArray.push(<img key={i} src={stars} alt="Grey Star" style={{ filter: 'grayscale(100%)' }} />);
    }
  }
  return starsArray;
}
