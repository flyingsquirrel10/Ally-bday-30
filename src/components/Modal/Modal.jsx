import React, { useState } from 'react';
import Modal from './Modal';

const riddles = [
  {
    question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
    answer: 'echo',
    imageUrl: 'path/to/echo-image.jpg'
  },
  // Add more riddles here...
];

const Riddles = () => {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState('');
  const currentRiddle = riddles[currentRiddleIndex];

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === currentRiddle.answer.toLowerCase()) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleNextRiddle = () => {
    setAnswer('');
    setShowModal(false);
    setCurrentRiddleIndex(currentRiddleIndex + 1);
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCheckAnswer();
    }
  };

  return (
    <div className="riddle-app">
      <div className="riddle-container">
        <h2>{currentRiddle.question}</h2>
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleCheckAnswer}>Check Answer</button>
      </div>
      {showModal && (
        <Modal
          answer={currentRiddle.answer}
          imageUrl={currentRiddle.imageUrl}
          onNextRiddle={handleNextRiddle}
        />
      )}
    </div>
  );
};

export default Riddles;
