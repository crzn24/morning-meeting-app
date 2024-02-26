import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="calendarpage">
      <div className="calendarpage-container">
        <h1 className="calendarpage-title">CALENDAR</h1>
        <div className="calendarpage-body">
          <Calendar
            onChange={onChange}
            value={value}
            showNeighboringMonth={false}
            calendarType="gregory"
            // calendarType="US"
            selectRange={true}
            minDetail="month"
            // showNavigation={}
            prev2Label={null}
            next2Label={null}
          />
        </div>
        <div className="calendarpage-fulldate-wrapper">
          <p className="calendarpage-fulldate">
            <span>Today is</span> {date.toLocaleDateString(undefined, options)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
