import React, { useEffect, useRef } from 'react'
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data"



const TitleCards = () => {

const cardsRef = useRef();

const handleWheel = (event) => {
event.preventDefault();
cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  cardsRef.current.addEventListener("wheel", handleWheel);
}, [])


  return (
    <div className='title-Cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {
          cards_data.map((cards,index)=>{
            return <div className="cards" key={index}>
              <img src={cards.image} alt="" />
              </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
