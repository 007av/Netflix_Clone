import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apidata, setAipData] = useState([]); //Karan data ha Api Formate made Yenar ahe tyamule emty Array ghetla

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJkOWUxN2U0YWI1ZmYyMzUxZGU1YThjMDRjZGJkNyIsIm5iZiI6MTc3MDg5NDc2MC41Mywic3ViIjoiNjk4ZGI1YTgzMWYxYzEyMjRhZGNkYmE0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WCQ4LAHfyaVUJynDkwYbfyK_Q3KtLdM9plyOTz9VrVg",
    },
  };



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) =>setAipData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((cards, index) => {
          return (
            <Link to={`/player/${cards.id}`} className="cards" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+cards.backdrop_path} alt="" />
              <p>{cards.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
