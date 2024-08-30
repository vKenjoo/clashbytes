"use client"

import { getRandomQuestions, sanitizeAnswer } from '../../../../../../util/Utils.js';
import pythonGET from '../../../../../../util/pythonGET.json';
import './quiz.css'
import {useRouter, useParams} from "next/navigation";
import {useEffect, useState} from "react"; // Make sure the CSS file is correctly linked

const Quiz = () => {
  const { id } = useParams()
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (pythonGET && pythonGET.subtopics && pythonGET.subtopics.length > 0) {
      const subtopic = pythonGET.subtopics[0];
      if (subtopic.questions && subtopic.questions.length > 0) {
        const randomQuestions = getRandomQuestions(subtopic.questions, 5);
        setQuestions(randomQuestions);
      } else {
        setError('No questions available in the selected subtopic.');
      }
    } else {
      setError('No subtopics available in the curriculum.');
    }
  }, []);

  const handleChange = (e, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: sanitizeAnswer(e.target.value),
    });
  };

  const handleSubmit = () => {
    router.push(`/singleplayer/language/${id}/topic/quiz/result?question=${JSON.stringify(questions)}&answer=${JSON.stringify(answers)}`);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : questions.length === 0 ? (
        <p className="loading">Loading questions...</p>
      ) : (
        questions.map((q, idx) => (
          <div key={q.id} className="question-container">
            <p className="question"><span className="question-number">{idx + 1}.</span> {q.question}</p>
            <input
              type="text"
              className="answer-input"
              onChange={(e) => handleChange(e, q.id)}
              value={answers[q.id] || ''}
            />
          </div>
        ))
      )}
      <button className="submit-btn" onClick={handleSubmit} disabled={questions.length === 0}>Submit</button>
    </div>
  );
};

export default Quiz;