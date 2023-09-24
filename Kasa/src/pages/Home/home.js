import * as React from "react";
import './home.scss';
import bannerImage from '../../assets/Cover.png';
import Cards from "../../components/common/cards/cards";
import dataCards from "../../data/data";

/**
La fonction Home est un composant qui représente la page d'accueil de l'application.
Elle affiche une bannière avec une citation et une image, ainsi qu'une liste de biens immobiliers disponibles.
*/
function Home() {
  return (
    <main className="Home">
      <section className="Banner">
        <div className="BannerOverlay">
          <p className="BannerQuote">Chez vous, partout et ailleurs</p>
        </div>
        <img src={bannerImage} alt="Falaise" />
      </section>

      <section>
        <div className="cardContainer">
          <Cards data={dataCards} />
        </div>
      </section>
    </main>
  )
}


export default Home;