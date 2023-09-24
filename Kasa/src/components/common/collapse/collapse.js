import React, { useState } from 'react';
import './collapse.scss';
import arrow from '../../../assets/prev.svg';

/**
La fonction Collapse est un composant qui représente une section de texte qui peut être réduite ou agrandie en cliquant sur un bouton (ici arrow).
False car la section de texte est fermée par default
*/
function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour changer l'état de isOpen
  function toggle() {
    setIsOpen(!isOpen);
  }

  // Définition de la classe CSS en fonction de l'état d'ouverture ou de fermeture du composant / utilisation du ternaire
  const arrowClassName = isOpen ? 'collapse__arrow arrow-open' : 'collapse__arrow arrow-closed';
  const collapsClassName = isOpen ? 'collapseText__box box-open' : 'collapseText__box box-closed';

  return (
    <div className='collapse' >
      <button className={arrowClassName} onClick={toggle}>
        <h3>{props.title}</h3>
        <img src={arrow} alt='arrow' />
      </button>
      {<div className={collapsClassName} onClick={toggle}>{props.children}</div>}
    </div>
  );
}

export default Collapse;