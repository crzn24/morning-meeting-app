import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  
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
            selectRange={true}
          />
        </div>
        <div className="calendarpage-fulldate-wrapper">
          <p className="calendarpage-fulldate">
            <span>Today is</span> {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
