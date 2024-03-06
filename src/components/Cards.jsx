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
      <h1>Welcome to our class!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src={img9}
              text="Who's here today?"
              label="Our Class"
              path="/class"
            />
            <CardItem
              src={img1}
              text="What day is it?"
              label="Calendar and Days of the Week"
              path="/calendar"
            />
            <CardItem
              src={img2}
              text="What is today's weather?"
              label="Weather"
              path="/weather"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={img9}
              text="How are you feeling?"
              label="Social Emotional Learning"
              path="/sel"
            />
            <CardItem
              src={img1}
              text="Let's pick some music!"
              label="Lofi Playlist"
              path="/lofi"
            />
            <CardItem
              src={img2}
              text="We need sounds!"
              label="Soundboard"
              path="/sounds"
            />
            <CardItem
              src={img6}
              text="Good morning!"
              label="Morning Video"
              path="/morning"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
