import './card.css';
import dishIcon from "../../../assets/icons/Dish icon.svg";
import { useInView } from 'react-intersection-observer';

export default function Card(props) {

    const { ref: cardRef, inView: cardIsVisible } = useInView();

    return (
        <article ref={cardRef} className={cardIsVisible ? "visible-card card-container" : "card-container"}>
            <img className='card-photo' src={props.imgSrc} alt="Card Photo" />
            <div className="row">
                <h3 className="title">{props.title}</h3>
                <p className="price">{props.price}</p>
            </div>
            <p className="description">{props.description}</p>
            <div className="order-row">
                <a className="order-btn" href="">Order a delivery</a>
                <img src={dishIcon} alt="Dish icon" />
            </div>
        </article>
    );
}