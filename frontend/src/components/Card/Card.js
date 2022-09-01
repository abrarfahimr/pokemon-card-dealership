import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({card, setCards, cardId, setCardId}) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        setCardId(card.id)
        event.preventDefault();
        navigate('/cart');
    }
;
    return (
            <div className="cardlist__card" key={card.id} >
            <img className="cardlist__card-photo" src={card.image} alt="card"/>
                <div className="cardlist__card-name">{card.title}</div>
            <div className="cardlist__card-price">{card.price}</div>
            <button className="cardlist__card-button" onClick={handleSubmit}>Add to Cart</button>
            </div>
    )
}
export default Card;