import './testimonial.css';
import star from '../../../assets/icons/icons8-star-64.png';
import { useInView } from 'react-intersection-observer';

export default function Testimonial(props) {

    const { ref: testimonialRef, inView: testimonialIsVisible } = useInView();

    return (
        <article ref={testimonialRef} className={testimonialIsVisible ? `visible-testimonial testimonial testimonial-${props.index}` : `testimonial testimonial-${props.index}`}>
            <div className="rating">
                <p>{props.rating}</p>
                <img src={star} alt="star icon" />
            </div>
            <div className="info">
                <img src={props.imgSrc} alt="Reviewer photo" />
                <p className="name">{props.name}</p>
            </div>
            <p className="review-text">{props.feedBack}</p>
        </article>
    );
}