import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Cart from'./components/pages/cartPage/cartPage';
import Shopping from'./components/pages/shoppingPage/shoppingPage';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState([]);
  const [cardInfo, setCardInfo] = useState([])

  useEffect(() => {
  axios.get(`http://localhost:8080/pokemon`)
  .then(response => {
    setCards(response.data);
      }).catch(err => {
      console.log(err)
        })
  }, []);
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/pokemon/${cardId}`)
      .then((response) => {
        setCardInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardId]);
    
          
  if (cards === null || cardId === null) {
        return <main className="loading">Loading...</main>;
  }
        
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Shopping
          cards = {cards}
          setCards = {setCards}
          cardId={cardId}
          setCardId = {setCardId}
        />} />
        <Route path="/cart" element={<Cart 
          cardId={cardId}
          setCardId = {setCardId}
          cardInfo = {cardInfo}
          setCardInfo = {setCardInfo}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;