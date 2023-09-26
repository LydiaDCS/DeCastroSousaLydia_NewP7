import React from "react";
import { Link } from "react-router-dom";
import "./error.scss"

// La fonction Error est un composant React qui est rendu lorsque la route demandée n'existe pas.

function Error() {
  return (
    <>
      <div className="error">
        <p className="error404">404</p>
        <div className="errorText">
          <h2>Oups ! La page que vous demandez n'existe pas.</h2>
          <h3> <Link to="/">Retourner à la page d'Accueil</Link> </h3>
        </div>
      </div>
    </>
  );
}

export default Error