import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./components/HBLandingPage/landingPage";

import HBday_header from "./components/Header/HBday_header";
import Riddles from "./components/Riddles/riddles";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/Riddles" element={<Riddles />} />
          </Routes>
        </div>
      </Router>
      {/* <HBday_header />
      <Riddles />; */}
    </div>
  );
}

export default App;
