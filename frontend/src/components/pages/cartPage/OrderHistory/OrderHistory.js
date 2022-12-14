
import './OrderHistory.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function OrderHistory({cardId, setCardId, cardInfo, setCardInfo }) {

    const[orderDetail, setOrderDetails] = useState([])
    useEffect(() => {
      axios
        .get(`${API_URL}/orders`)
        .then((response) => {
          setOrderDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
          },[]);

  return (
    <div className="history__container">
      <h3 className="history__title">Order History</h3>
      {orderDetail.map((order) => {
        return (
          <>
            <div className="cardlist__card" key={order.id}>
              <img
                className="cardlist__card-photo"
                src={order.image}
                alt="card"
              />
              <div className="cardlist__card-name">{order.title}</div>
              <div className="cardlist__card-price">{order.price}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default OrderHistory;