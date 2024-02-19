import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "../assets/images/img-9.jpg"

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards--wrapper">
          <ul className="cards--item">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Adventure"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
