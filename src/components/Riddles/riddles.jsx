import React, { useState } from "react";
import "./riddles.css";

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    answer: "echo",
    correctImage: "./key_1.png",
    incorrectImage: "./allyOneEye-airport.png",
  },
  {
    question: "What has keys but can't open locks?",
    answer: "piano",
    correctImage: "./key_2.png",
    incorrectImage: "./allOneEye.png",
  },
  {
    question:
      "I am taken from a mine, and shut in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    answer: "pencil",
    correctImage: "./key_3.png",
    incorrectImage: "./ally-cringe-peru.png",
  },
];

const Riddles = () => {
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleAnswerSubmit = () => {
    const { answer } = riddles[currentRiddle];
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
      setShowModal(true);
    } else {
      setIsCorrect(false);
      setShowModal(true);
    }
  };

  const handleTryAgain = () => {
    setShowModal(false);
    setUserAnswer("");
  };

  const handleNextRiddle = () => {
    setUserAnswer("");
    setShowModal(false);
    setIsCorrect(false);
    setCurrentRiddle(currentRiddle + 1);
  };

  const isNextDisabled = !isCorrect || userAnswer === "";

  return (
    <div className="riddle-app">
      <h1>The Answers will give you the keys ....lol</h1>
      {showModal && (
        <div className={`modal ${isCorrect ? "correct" : "incorrect"}`}>
          <div className="modal-content">
            <h3>{isCorrect ? "Correct!" : "Incorrect!"}</h3>
            <img
              src={
                isCorrect
                  ? riddles[currentRiddle].correctImage
                  : riddles[currentRiddle].incorrectImage
              }
              alt="Riddle Image"
              className="img-size"
            />
            <p>{isCorrect ? "Well done!" : "Try again."}</p>
            {!isCorrect && <button onClick={handleTryAgain}>Try Again</button>}
            <button disabled={isNextDisabled} onClick={handleNextRiddle}>
              Next Riddle
            </button>
          </div>
        </div>
      )}

      <div className="riddle-h">
        {currentRiddle < riddles.length ? (
          <div >
            <h1>Riddle {currentRiddle + 1}</h1>
            <h2>{riddles[currentRiddle].question}</h2>
            <input
              type="text"
              value={userAnswer}
              onChange={handleAnswerChange}
              className="riddle-input"
            />
            <button className="check-answer" onClick={handleAnswerSubmit}>Check Answer</button>
          </div>
        ) : (
          <h2>Congratulations! You've completed all the riddles. <br/> <br/> All the locks should be off!
           <br />
           <br />
           HAPPY BIRTHDAY!!! </h2>
        )}
      </div>
    </div>
  );
};

export default Riddles;
