
import './shoppingPage.scss';
import Cards from '../../Cards/Cards'




function Shopping({cards, setCards, cardId, setCardId}) {

  return (
    <>
      <Cards 
        cards={cards}
        setCards = {setCards}
        cardId={cardId}
        setCardId = {setCardId}
      />
    </> 
  );
}

export default Shopping;
