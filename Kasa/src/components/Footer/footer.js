import './footer.scss';
import LogoFooter from '../../assets/LogoFooter.png'

function Footer() {
  return (
    <footer className='footer'>
      <h1><img src={LogoFooter} alt='icon kasa' className='kasaLogoFooter' /></h1>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer;