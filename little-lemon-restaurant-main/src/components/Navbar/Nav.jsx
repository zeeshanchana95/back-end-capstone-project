import { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let links = document.querySelectorAll('.nav-item');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', () => {
                setIsVisible(false);
            })
        }
    }, []);

    return (
        <nav className="nav-bar">
            <img className="logo" src={logo} alt="logo" />
            <div onClick={() => setIsVisible(!isVisible)} className="hamburger">
                <span className={isVisible ? "line x-line" : "line"}></span>
                <span className={isVisible ? "line x-line" : "line"}></span>
                <span className={isVisible ? "line x-line" : "line"}></span>
            </div>
            <ul className={isVisible ? "nav-items visible" : "nav-items"}>
                <li className="nav-item">
                    <Link to="/" className="router-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="router-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="router-link">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link to="/booking-table" className="router-link">Reservations</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="router-link">Order Online</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="router-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
}