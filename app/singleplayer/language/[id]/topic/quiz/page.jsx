"use client"

import { useNavigate } from 'react-router-dom';
import { getRandomQuestions, sanitizeAnswer } from '../../../../../../refactor/components/SP/topic/Quiz/Utils.js';
import pythonGET from '../../../../../../refactor/components/SP/LanguageJSON/pythonGET.json';
import '../../../../../../refactor/components/SP/topic/Quiz/Quiz.css'; // Make sure the CSS file is correctly linked

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    navigate('/result', { state: { questions, answers } });
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