import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './header.scss'

//La fonction Header est un composant qui représente l'en-tête de l'application.

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt='icon kasa' className='kasaLogo' />
      <nav className='navigationLink'>
        <ul>
          <li>
            <Link to="/" activeClassName="active-link">Accueil</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-link">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;