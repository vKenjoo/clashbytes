import React, { useState } from 'react';

const Question = ({ question, options, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswer(selectedAnswer === question.correctAnswer);
        setSelectedAnswer(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h3 className="text-xl font-bold mb-4">{question.text}</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {options.map((option, index) => (
                        <label key={index} className={`block p-4 border rounded cursor-pointer text-center ${selectedAnswer === option ? 'bg-yellow-300' : 'bg-gray-200'}`}>
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => setSelectedAnswer(option)}
                                className="hidden"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Question;
