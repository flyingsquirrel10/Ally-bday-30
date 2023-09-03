import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="grid-container">
      <div className="left-column small-column">
        <img
          src="./allyAlex-happy.png"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
        <img
          src="./allyFlowers.jpg"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
        <img
          src="./allySnow.jpg"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
      </div>
      <div className="middle-column">
        <div className="h">
          <h1>Welcome to 30</h1>
          <h2>Happy Early Birthday!!</h2>
          <Link to="/Riddles" className="kstate-fade">
            {" "}
            <div className="new-page-button">Lets GOOOOOO - Click to Play!</div>
          </Link>

          {Array.from({ length: 60 }, (_, i) => (
            <div key={i} className="c"></div>
          ))}
        </div>
      </div>
      <div className="right-column small-column">
        <img
          src="./allyAlex.jpg"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
        <img
          src="./allyPlane.jpg"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
        <img
          src="./allySlumped.jpg"
          alt="Birthday Celebration"
          className="swollenEye-img"
        />
      </div>
    </div>

    // <div className="columns">
    //   <div className="small-column">
    //     <img
    //       src="./swollenEye.jpeg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //     <img
    //       src="./allyFlowers.jpg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //     <img
    //       src="./allySnow.jpg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //   </div>
    //   <div className="large-column">
    //     <div className="h">
    //       <h1>Welcome to 30!!</h1>
    //       <h2> lol a tad early ... but u know same premisis</h2>
    //       <Link to="/Riddles" className="kstate-fade">
    //         {" "}
    //         <div className="new-page-button">Lets GOOOOOO - Click to Play!</div>
    //       </Link>

    //       {Array.from({ length: 60 }, (_, i) => (
    //         <div key={i} className="c"></div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="small-column">
    //     <img
    //       src="./allyAlex.jpg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //     <img
    //       src="./allyPlane.jpg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //     <img
    //       src="./allySlumped.jpg"
    //       alt="Birthday Celebration"
    //       className="swollenEye-img"
    //     />
    //   </div>
    // </div>
  );
};

export default LandingPage;
