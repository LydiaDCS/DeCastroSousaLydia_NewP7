import './footer.scss';
import LogoFooter from '../../assets/LogoFooter.png'

//La fonction Footer est un composant qui représente le pied de page de l'application.

function Footer() {
  return (
    <footer className='footer'>
      <img src={LogoFooter} alt='icon kasa' className='kasaLogoFooter' />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer;