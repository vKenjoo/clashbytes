// src/utilities/Utils.js
export const getRandomQuestions = (questions, count) => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const sanitizeAnswer = (answer) => {
  return answer.trim();
};
