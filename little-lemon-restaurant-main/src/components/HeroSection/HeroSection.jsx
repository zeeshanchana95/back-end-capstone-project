import './hero.css';
import headerPhoto_1 from "/restauranfood.jpg";
import headerPhoto_2 from "/restaurant chef B.jpg";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function HeroSection() {

    const { ref: contentRef, inView: contentIsVisible } = useInView();
    const { ref: photosRef, inView: photosIsVisible } = useInView();

    return (
        <section className="hero-container">
            <div ref={contentRef} className={contentIsVisible ? "visible-content hero-content" : "hero-content"}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a localy-sourced menu with daily specials.
                </p>
                <button><Link to="/booking-table" className='hero-router-link'>Reserve a Table</Link></button>
            </div>
            <div ref={photosRef} className={photosIsVisible ? "visible-photos hero-photos" : "hero-photos"}>
                <img className='hero-photo photo-1' src={headerPhoto_1} alt="Food Photo" />
                <img className='hero-photo photo-2' src={headerPhoto_2} alt="Food Photo" />
            </div>
        </section>
    );
}