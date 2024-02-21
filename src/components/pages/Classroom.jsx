import React from "react";
import { useState } from "react";
import "./Classroom.css";
import Modal from "../Modal";
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
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <div className="classroom-cards">
      <button
        className="modal-btn modal-btn-open"
        onClick={() => setModalOpen(true)}
      >
        Open
      </button>
      <h1>Our Class!</h1>
      <div className="classroom-cards--container">
        <div className="classroom-cards--wrapper">
          {/* Students  */}
          <ul className="classroom-cards--items">
            <ClassroomCardItem
              src={ez}
              text="Elvira"
              label="Student"
              path={"/class"}
            />
            <ClassroomCardItem
              src={kd}
              text="Kayden"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={jo}
              text="Jeremiah"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={ja}
              text="Jumanah"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={ai}
              text="Abbas"
              label="Student"
              path="/class"
            />
          </ul>
          <ul className="cards--items">
            <ClassroomCardItem
              src={jl}
              text="JB"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={dd}
              text="Donnie"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={ls}
              text="Logan"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={tw}
              text="Titus"
              label="Student"
              path="/class"
            />
            <ClassroomCardItem
              src={an}
              text="Anthony"
              label="Student"
              path="/class"
            />
          </ul>
          {/* Teachers  */}
          <ul className="cards--items">
            <ClassroomCardItem
              src={pl}
              text="Mr. Patrick"
              label="Teacher"
              path="/class"
            />
            <ClassroomCardItem
              src={placeholder}
              text="Nicky"
              label="Teacher"
              path="/class"
            />
            <ClassroomCardItem
              src={nc}
              text="Mr. Cruz"
              label="Teacher"
              path="/class"
            />
            <ClassroomCardItem
              src={sb}
              text="Mrs. Bernert"
              label="Teacher"
              path="/class"
            />
            <ClassroomCardItem
              src={lw}
              text="Ms. Washington"
              label="Teacher"
              path="/class"
            />
            <ClassroomCardItem
              src={placeholder}
              text="Ms. Le"
              label="Teacher"
              path="/class"
            />
          </ul>
        </div>
      </div>

      {modalOpen && (
        <Modal
          onSubmit={handleButtonClick}
          onCancel={handleButtonClick}
          onClose={handleButtonClick}
        >
          <h1>Good Morning!</h1>
        </Modal>
      )}
    </div>
  );
};

export default Classroom;
