import React from "react";


import { motion } from "framer-motion";


import "./HBday_header.css";

const HBday_header = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left side*/}
        <div className="flexColStart left">
          <title> All Bday APPP</title>
          <div className="title">
            <div className="purple-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              {" "}
              You're 30!! <br />
              HAPPY BIRTHDAY!!!!
            </motion.h1>
          </div>
          <div className="flexColStart description">
            <span className="secondaryText">
              {" "}
              lol a tad early ... but u know same premisis here
            </span>
          </div>
        </div>

        {/*right side*/}
        <div className="flexCenter right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="img-container"
          >
            <img src="./swollenEye.jpeg" alt="building" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HBday_header;
