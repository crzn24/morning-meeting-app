import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ScrollToTop from "./components/helpers/ScrollToTop.jsx";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <Router>
        <ScrollToTop />
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
