import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Classroom from "./components/pages/Classroom";
import CalendarPage from "./components/pages/CalendarPage";
import Weather from "./components/pages/Weather";
import SelPage from "./components/pages/SelPage";
import LofiPage from "./components/pages/LofiPage";
import Sounds from "./components/pages/Sounds";
import Footer from "./components/Footer.jsx";
import Morning from "./components/pages/Morning.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/class" exact Component={Classroom} />
          <Route path="/calendar" exact Component={CalendarPage} />
          <Route path="/weather" exact Component={Weather} />
          <Route path="/sel" exact Component={SelPage} />
          <Route path="/lofi" exact Component={LofiPage} />
          <Route path="/sounds" exact Component={Sounds} />
          <Route path="/morning" exact Component={Morning} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
