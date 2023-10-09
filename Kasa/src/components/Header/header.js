import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './header.scss'

//La fonction Header est un composant qui représente l'en-tête de l'application.

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt='icon kasa' className='kasaLogo' />
      <nav className='navigationLink'>
        <ul>
          <li className='navigationLink_links'>
            <NavLink className={({ isActive }) => (isActive ? 'navigationLink_links_header_active' : 'navigationLink_links_header_inactive')} to="/" >Accueil</NavLink>
          </li>
          <li className='navigationLink_links'>
            <NavLink className={({ isActive }) => (isActive ? 'navigationLink_links_header_active' : 'navigationLink_links_header_inactive')} to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;