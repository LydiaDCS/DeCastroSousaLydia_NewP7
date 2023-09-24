import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './header.scss'

/**
La fonction Header est un composant qui représente l'en-tête de l'application.
Elle affiche le logo de Kasa et des liens de navigation vers la page "d'accueil" (home.js) et la page "A propos" (about.js).
*/

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt='icon kasa' className='kasaLogo' />
      <nav className='navigationLink'>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;