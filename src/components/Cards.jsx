import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../assets/images/img-1.jpg"; // TODO: figure out how to pass props with src showing actual file path
import img2 from "../assets/images/img-2.jpg";
import img6 from "../assets/images/img-6.jpg";
import img9 from "../assets/images/img-9.jpg";

import calendarpic from "../assets/images/calendar.jpg"
import musicpic from "../assets/images/music.jpg"
import soundboardpic from "../assets/images/music2.jpg"
import emotionspic from "../assets/images/emotions.jpg"
import cherryblossomspic from "../assets/images/cherryblossoms.jpg"
import doghandpic from "../assets/images/dogpaw.jpg"
import palmtreespic from "../assets/images/palmtrees.jpg"



const Cards = () => {
  return (
    <div className="cards">
      <h1>Welcome to our class!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src={doghandpic}
              text="Who's here today?"
              label="Our Class"
              path="/class"
            />
            <CardItem
              src={calendarpic}
              text="What day is it?"
              label="Calendar and Days of the Week"
              path="/calendar"
            />
            <CardItem
              src={palmtreespic}
              text="What is today's weather?"
              label="Weather"
              path="/weather"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={emotionspic}
              text="How are you feeling?"
              label="Social Emotional Learning"
              path="/sel"
            />
            <CardItem
              src={musicpic}
              text="Let's pick some music!"
              label="Lofi Playlist"
              path="/lofi"
            />
            <CardItem
              src={soundboardpic}
              text="We need sounds!"
              label="Soundboard"
              path="/sounds"
            />
            <CardItem
              src={cherryblossomspic}
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
