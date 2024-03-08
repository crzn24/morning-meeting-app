import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";
import ReactPlayer from "react-player";

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
            <span>Today is</span>{" "}
            {/* <span className="full-date-span">
              {date.toLocaleDateString(undefined, options)}
            </span> */}
            <span className="weekday-span">
              {date.toLocaleDateString(undefined, { weekday: "long" }) + ", "}
            </span>
            <span className="full-date-span">
              {date.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
        </div>
        <div className="calendar-daysofweek-container">
          <div className="cal-daysofweek-container">
            <div className="cal-day cal-sun">Sunday</div>
            <div className="cal-day cal-mon">Monday</div>
            <div className="cal-day cal-tues">Tuesday</div>
            <div className="cal-day cal-wed">Wednesday</div>
            <div className="cal-day cal-thurs">Thursday</div>
            <div className="cal-day cal-fri">Friday</div>
            <div className="cal-day cal-sat">Saturday</div>
          </div>
        </div>
        <div className="cal-react-player-wrapper">
          <ReactPlayer
            className="cal-react-player"
            url="https://www.youtube.com/watch?v=oKqAblcwFOA"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
