import React, { useState } from 'react';
import './collapse.scss';
import arrow from '../../../assets/prev.svg';

// La fonction Collapse est un composant qui représente une section de texte qui peut être réduite ou agrandie en cliquant sur un bouton (ici arrow).

function Collapse(props) {
  //Utilisation de Usestate pour modifier l'état d'ouverture de la section de texte (par défault l'état est fermé donc false)
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour changer l'état de isOpen et le passer à true
  function toggle() {
    setIsOpen(!isOpen);
  }

  // Définition de la classe CSS en fonction de l'état d'ouverture ou de fermeture du composant / utilisation du ternaire
  const arrowState = isOpen ? ' arrow-open' : ' arrow-closed';
  const collapseState = isOpen ? 'collapseText__ box-open' : 'collapseText__ box-closed';

  return (
    <div className='collapse' >
      <button className={arrowState} onClick={toggle}>
        <h3>{props.title}</h3>
        <img src={arrow} alt='arrow' />
      </button>
      <div className={collapseState} onClick={toggle}>{props.children}</div>
    </div>
  );
}

export default Collapse;