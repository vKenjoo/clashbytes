"use client"

import React from 'react';
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from 'next/link'

const Result = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const { id } = useParams();  // Get `id` from URL parameters
  const questions = JSON.parse(searchParams.get("question"))
  const answers = JSON.parse(searchParams.get("answers"))

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
          href={`singleplayer/language/${id}/topic/learn`}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
        >
          Go back to Tutorial
        </Link>
        <Link
          href={`singleplayer/language/${id}/topic/quiz`}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Retake the Test
        </Link>
        <button
          onClick={() => router.push('/')}
          className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4'
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
