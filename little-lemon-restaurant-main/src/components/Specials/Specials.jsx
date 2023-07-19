import Card from "./Card/Card";
import greekSalad from "/dishes/greek salad.jpg";
import bruschetta from "/dishes/Bruschetta.jpg";
import lemonDessert from "/dishes/Raw_Lemon_Cake.jpg";
import './specials.css';

export default function Specials() {

    const dishes = [
        {
            title: "Greek salad",
            description: "The greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            price: "$ 12.99",
            imageSrc: greekSalad,
        },
        {
            title: "Bruchetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            price: "$ 5.99",
            imageSrc: bruschetta,
        },
        {
            title: "Lemon Dessert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$ 5.00",
            imageSrc: lemonDessert,
        },
    ];

    return (
        <section className="section-container">
            <div className="title-row">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="specials-wrapper">
                <div className="specials">
                    {
                        dishes.map((dish) => {
                            return <Card key={dish.title} title={dish.title} description={dish.description} price={dish.price} imgSrc={dish.imageSrc} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}