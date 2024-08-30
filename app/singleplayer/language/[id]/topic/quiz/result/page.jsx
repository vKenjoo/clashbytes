import React from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();  // Get `id` from URL parameters
  const { questions = [], answers = {} } = location.state || {};

  const sanitizeAnswer = (answer) => {
    return answer.trim();
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (sanitizeAnswer(answers[q.id]) === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const score = getScore();

  return (
    <div>
      <h1>Results</h1>
      <p>
        Your Score: {score} / {questions.length}
      </p>
      <h2>Review:</h2>
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q.id}>
            <p>
              <strong>Question:</strong> {q.question}
            </p>
            <p>
              <strong>Your Answer:</strong> {answers[q.id]}
            </p>
            <p>
              <strong>Correct Answer:</strong> {q.answer}
            </p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      <div className="mt-4">
        <Link
          to={`/language/${id}/topic/learn`}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
        >
          Go back to Tutorial
        </Link>
        <Link
          to={`/language/${id}/topic/quiz`}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Retake the Test
        </Link>
        <button
          onClick={() => navigate('/')}
          className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4'
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
