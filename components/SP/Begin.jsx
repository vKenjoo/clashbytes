import React from 'react';
import { useNavigate } from 'react-router-dom';

const Begin = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('quiz');
  };

  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Begin;
