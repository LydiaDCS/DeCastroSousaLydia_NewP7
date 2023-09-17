import './footer.scss';
import LogoFooter from '../../assets/LogoFooter.png'

function Footer() {
  return (
    <footer className='footer'>
      <h2><img src={LogoFooter} alt='icon kasa' className='kasaIconBlanc' /></h2>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer;