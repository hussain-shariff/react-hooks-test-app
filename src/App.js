import React from "react";
import List from "./List";
import data from './data'


function App() {
  const [cardData, setCardData] = React.useState(data);
  let cardElements = cardData.map((card)=>
      <List image= { card.image }
            name = { card.name }
            key = { card.id }
            age = { card.age }
            id = { card.id }
            removeCard = { delCard }/>
  )

  function delCard(id){
    let newArr = cardData.filter((card)=> card.id !== id);
    setCardData(newArr)
  }

  function handleClick(){
    cardData.length === 0 ? setCardData(data) : setCardData([])
  }

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{ cardData.length } Birthdays today</h3>
          { cardElements }
          <button className="clear-btn" onClick={ handleClick }>{cardData.length === 0? "show all" : "Clear all"}</button>
        </section>
      </main>
    </div>
  );
}

export default App;
