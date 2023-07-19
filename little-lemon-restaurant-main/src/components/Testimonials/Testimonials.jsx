import patrick from "/people/patrick.jpg";
import lisa from "/people/lisa.jpg";
import amanda from "/people/amanda.jpg";
import joy from "/people/joy.jpg";
import Testimonial from "./Testimonial/Testimonial";
import './testimonials.css';

export default function Testemonials() {

    const reviews = [
        {
            name: "Patrick",
            img: patrick,
            text: "It was an amazing experience, I really enjoyed the food especially the signature dessert, and the service was great.",
            rating: "5/5",
        },
        {
            name: "Lisa",
            img: lisa,
            text: "I ordered the greek salad online and it was a worthwhile experience, the food is delicious and the service is excellent",
            rating: "4.5/5",
        },
        {
            name: "Amanda",
            img: amanda,
            text: "We went to little lemon restaurant for our wedding anniversary, we really enjoyed it, it was very romantic",
            rating: "4/5",
        },
        {
            name: "Joy",
            img: joy,
            text: "I booked a table at little lemon restaurant for my friend's birthday and it was a special night, we had a lot of fun !",
            rating: "4.5/5",
        },
    ];

    return (
        <section className="testimonials-container">
            <h1 className="testimonials-title">Testimonials</h1>
            <article className="testimonials">
                {reviews.map((review, index) => {
                    return <Testimonial index={index} key={review.name} name={review.name} imgSrc={review.img} feedBack={review.text} rating={review.rating} />;
                })}
            </article>
        </section>
    );
}