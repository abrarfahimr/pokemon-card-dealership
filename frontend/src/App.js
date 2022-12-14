import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/pages/cartPage/cartPage';
import Shopping from './components/pages/shoppingPage/shoppingPage';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/pokemon`)
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/pokemon/${cardId}`)
      .then((response) => {
        setCardInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardId]);

  if (cards === [] || cardId === []) {
    return <main className="loading">Loading...</main>;
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Shopping
                cards={cards}
                setCards={setCards}
                cardId={cardId}
                setCardId={setCardId}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cardId={cardId}
                setCardId={setCardId}
                cardInfo={cardInfo}
                setCardInfo={setCardInfo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
