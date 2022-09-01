
import './cartPage.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import OrderHistory from '../cartPage/OrderHistory/OrderHistory'


function Cart({ cardId, setCardId, cardInfo, setCardInfo }) {
  const navigate = useNavigate();
  
  const submitHandler = () => {
    alert('YOU GOT SCAMMED HAHAHA');
    axios
      .post('http://localhost:8080/orders', {
        id: cardInfo.id,
        title: cardInfo.title,
        price: cardInfo.price,
        image: cardInfo.image,
      })
      .then((response) => {
        console.log(response.data);
      });
    navigate('/');
  };
  return (

    <div className="cart__container">
      <h2 className="cart__title">Shopping Cart</h2>
      <div className="cart__container">
        <div className="cart__card" key= {cardInfo.id}>
              <img className="cart-photo" src={cardInfo.image} alt="card"/> 
              <div className="cart-name"> {cardInfo.title} </div>
              <div className="cart-grading">{cardInfo.grading}</div> 
              <div className="cart-date">{cardInfo.date}</div> 
              <div className="cart-description">{cardInfo.description}</div>
              <div className="cart-price">{cardInfo.price}</div>
        </div>
      <button className="cart__button" onClick={submitHandler}> BUY </button>
      </div>
      <OrderHistory></OrderHistory>
    </div>

  )
}

export default Cart;