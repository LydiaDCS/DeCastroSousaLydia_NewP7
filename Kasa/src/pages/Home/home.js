import * as React from "react";
import './home.scss';
import homeBanner from '../../assets/Cover.png';
import Cards from "../../components/common/cards/cards";
import dataCards from "../../data/data";

// La fonction Home est un composant qui représente la page d'accueil de l'application.

function Home() {
  return (
    <main className="Home">
      <section className="Banner">
        <p className="BannerQuote">Chez vous, partout et ailleurs</p>
        <img src={homeBanner} alt="Falaise" />
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