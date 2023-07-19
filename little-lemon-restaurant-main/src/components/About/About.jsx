import './about.css';
import restaurant from '/restaurant.jpg';
import quote from "../../assets/icons/icons8-quote-50.png";
import { useInView } from 'react-intersection-observer';

export default function About() {

    const { ref: aboutRef, inView: aboutIsVisible } = useInView();
    const { ref: imgRef, inView: imgIsVisible } = useInView();

    return (
        <section className="about-container">
            <h1 className="about-title">About</h1>
            <div className="about-wrapper">
                <div ref={aboutRef} className={aboutIsVisible ? "visible-about about" : "about"}>
                    <div className="quote">
                        <img src={quote} alt="quote icon" />
                    </div>
                    <p><span>Little Lemon</span> is a 4-star restaurant located in the city of Chicago, distinguished by its varied western and eastern cuisine, and many of the most famous dessert dishes around the world prepared by the best chefs, and it is distinguished by its modern design and wonderful view from the terrace.</p>
                </div>
                <img ref={imgRef} className={imgIsVisible ? "visible-img restaurant-img" : "restaurant-img"} src={restaurant} alt="Restaurant image" />
            </div>
        </section>
    );
}