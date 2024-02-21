import React from "react";
import './Classroom.css'
import ClassroomCardItem from "./ClassroomCardItem";
import ai from "../../assets/images/class/ai.jpeg";
import an from "../../assets/images/class/an.jpeg";
import dd from "../../assets/images/class/dd.jpeg";
import ez from "../../assets/images/class/ez.jpeg";
import ja from "../../assets/images/class/ja.jpeg";
import jl from "../../assets/images/class/jl.jpg";
import jo from "../../assets/images/class/jo.jpeg";
import kd from "../../assets/images/class/kd.jpeg";
import ls from "../../assets/images/class/ls.jpeg";
import lw from "../../assets/images/class/lw.jpg";
import nc from "../../assets/images/class/nc.jpg";
import pl from "../../assets/images/class/pl.jpg";
import placeholder from "../../assets/images/class/placeholder.jpeg";
import sb from "../../assets/images/class/sb.jpg";
import tw from "../../assets/images/class/tw.jpeg";

const Classroom = () => {
  return (
    <div className="classroom-cards">
      <h1>Our Class!</h1>
      <div className="classroom-cards--container">
        <div className="classroom-cards--wrapper">
          {/* Students  */}
          <ul className="classroom-cards--items">
            <ClassroomCardItem
              src={ez}
              text="Elvira"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={kd}
              text="Kayden"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={jo}
              text="Jeremiah"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={ja}
              text="Jumanah"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={ai}
              text="Abbas"
              label="Student"
              path="/"
            />
          </ul>
          <ul className="cards--items">
            <ClassroomCardItem
              src={jl}
              text="JB"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={dd}
              text="Donnie"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={ls}
              text="Logan"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={tw}
              text="Titus"
              label="Student"
              path="/"
            />
            <ClassroomCardItem
              src={an}
              text="Anthony"
              label="Student"
              path="/"
            />
          </ul>
          {/* Teachers  */}
          <ul className="cards--items">
            <ClassroomCardItem
              src={pl}
              text="Mr. Patrick"
              label="Teacher"
              path="/"
            />
            <ClassroomCardItem
              src={placeholder}
              text="Nicky"
              label="Teacher"
              path="/"
            />
            <ClassroomCardItem
              src={nc}
              text="Mr. Cruz"
              label="Teacher"
              path="/"
            />
            <ClassroomCardItem
              src={sb}
              text="Mrs. Bernert"
              label="Teacher"
              path="/"
            />
            <ClassroomCardItem
              src={lw}
              text="Ms. Washington"
              label="Teacher"
              path="/"
            />
            <ClassroomCardItem
              src={placeholder}
              text="Ms. Le"
              label="Teacher"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Classroom;
