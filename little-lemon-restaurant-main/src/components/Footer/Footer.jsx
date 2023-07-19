import './footer.css';
import imgSrc from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/icons8-facebook-30.png';
import twitter from '../../assets/icons/icons8-twitter-30.png';
import insta from '../../assets/icons/icons8-instagram-30.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="doormat-navigation">
                <li className="footer-title">Doormat Navigation</li>
                <li className="doormat-link">
                    <Link to="/" className='footer-link'>Home</Link>
                </li>
                <li className="doormat-link">
                    <Link to="/" className='footer-link'>About</Link>
                </li>
                <li className="doormat-link">
                    <Link to="/" className='footer-link'>Menu</Link>
                </li>
                <li className="doormat-link">
                    <Link to="/booking-table" className='footer-link'>Reservation</Link>
                </li>
                <li className="doormat-link">
                    <Link to="/" className='footer-link'>Order Online</Link>
                </li>
                <li className="doormat-link">
                    <Link to="/" className='footer-link'>Login</Link>
                </li>
            </ul>
            <ul className="contacts">
                <li className="footer-title">Contact</li>
                <li className="contact">
                    <a href="" className='footer-link'>Address</a>
                </li>
                <li className="contact">
                    <a href="" className='footer-link'>Phone number</a>
                </li>
                <li className="contact">
                    <a href="" className='footer-link'>Email</a>
                </li>
            </ul>
            <ul className="socials">
                <li className="footer-title">Social Links</li>
                <li className="social">
                    <a href="">
                        <img src={facebook} alt="facebook icon" />
                    </a>
                </li>
                <li className="social">
                    <a href="">
                        <img src={twitter} alt="twitter icon" />
                    </a>
                </li>
                <li className="social">
                    <a href="">
                        <img src={insta} alt="instagram icon" />
                    </a>
                </li>
            </ul>
            <img className="footer-img" src={imgSrc} alt="logo" />
        </footer>
    );
}