import "./Cards.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'


const Cards = ({cards, setCards, cardId, setCardId}) => {


    return (
    <section className = "cardlist__block">
        {cards
        .map ((card)=> {return (
            <>
                <Card
                    card = {card}
                    cardId = {cardId}
                    setCardId = {setCardId}
                />
            </>
        )})}
    </section>
    )
}
export default Cards;