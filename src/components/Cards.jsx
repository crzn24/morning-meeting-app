import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../assets/images/img-1.jpg"; // TODO: figure out how to pass props with src showing actual file path
import img2 from "../assets/images/img-2.jpg";
import img6 from "../assets/images/img-6.jpg";
import img9 from "../assets/images/img-9.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>This is our class!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img2}
              text="Travel through the islands..."
              label="Adventure"
              path="/"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img2}
              text="Travel through the islands..."
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img6}
              text="Explore the hidden waterfall deep inside the Amazon Rainforest"
              label="Teacher"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
