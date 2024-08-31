"use client"

import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; 
import 'codemirror/theme/eclipse.css'; 
import 'codemirror/mode/python/python';

const validateCode = (code, topic) => {
  switch (topic) {
    case 'Comments and Printing':
      return /\/\/.*|console\.log\(.*\);/.test(code);
    case 'Variables & Data Types':
      return /(let|const|var) \w+ ?= ?(.*);/.test(code);
    case 'Basic Operations':
      return /\d+ [+\-*/] \d+/.test(code);
    case 'Conditionals':
      return /if ?\(.*\) ?{/.test(code);
    case 'Strings':
      return /".*"|'.*'/.test(code);
    case 'Loops':
      return /for ?\(.*;.*;.*\) ?{/.test(code);
    case 'Casting':
      return /Number|String|Boolean/.test(code);
    case 'Object Oriented Programming':
      return /class \w+ ?{/.test(code);
    default:
      return false;
  }
};

const getInstruction = (topic) => {
  switch (topic) {
    case 'Comments and Printing':
      return 'Write a comment using // and print a message to the console using console.log().';
    case 'Variables & Data Types':
      return 'Declare variables using let, const, or var and assign them values.';
    case 'Basic Operations':
      return 'Perform basic arithmetic operations like addition, subtraction, multiplication, and division.';
    case 'Conditionals':
      return 'Write an if statement to check a condition and execute code based on it.';
    case 'Strings':
      return 'Create a string by enclosing text in quotes, either single or double.';
    case 'Loops':
      return 'Write a for loop to iterate over a block of code a specified number of times.';
    case 'Casting':
      return 'Convert data from one type to another using Number, String, or Boolean.';
    case 'Object Oriented Programming':
      return 'Create a class with properties and methods.';
    default:
      return '';
  }
};

const LearnFrame = () => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [theme, setTheme] = useState('material'); 
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); 

  const topics = [
    'Comments and Printing',
    'Variables & Data Types',
    'Basic Operations',
    'Conditionals',
    'Strings',
    'Loops',
    'Casting',
    'Object Oriented Programming'
  ];

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  const handleValidate = () => {
    const currentTopic = topics[currentTopicIndex];
    if (validateCode(code, currentTopic)) {
      setFeedback(`✅ Correct for ${currentTopic}!`);
    } else {
      setFeedback(`❌ Try Again for ${currentTopic}.`);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'material' ? 'eclipse' : 'material'));
  };

  const handleNextTopic = () => {
    setCurrentTopicIndex((currentTopicIndex + 1) % topics.length);
    setCode(''); 
    setFeedback(''); 
  };

  const currentTopic = topics[currentTopicIndex];

  return (
    <div className='flex flex-col items-center justify-center text-white pt-10 w-4/5'>
      <h1 className='text-4xl font-bold py-2 text-center'>Learn to Code</h1>
      <div className='text-center'>
        <h2>Watch this Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VchuKL44s6E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='my-10 mx-auto'
        ></iframe>
      </div>
      <button onClick={toggleTheme} className='mb-5 px-4 py-2 bg-blue-500 text-white rounded'>
        Toggle {theme === 'material' ? 'Light' : 'Dark'} Mode
      </button>
      <div className='mb-10 bg-gray-800 rounded-2xl py-6 w-4/5'>
        <h2 className='text-yellow-500 text-2xl pb-5 font-bold text-center'>{currentTopic}</h2>
        <p className='text-center'>{getInstruction(currentTopic)}</p>
        <div className='text-left px-5'>
          <CodeMirror
            value={code}
            options={{
              mode: 'python',
              theme: theme,
              lineNumbers: true,
              placeholder: '//Code here', // Add placeholder text
            }}
            onBeforeChange={handleChange}
            editorDidMount={editor => {
              editor.setSize("100%", "150px"); // Set the height of the editor
            }}
          />
        </div>
        <div className='flex justify-between px-5'>
          <button onClick={handleValidate} className='mt-5 px-4 py-2 bg-green-500 text-white rounded'>
            Validate
          </button>
          <button onClick={handleNextTopic} className='mt-5 px-4 py-2 bg-teal-500 text-white rounded'>
            Next Topic
          </button>
        </div>
      </div>
      <p className='text-2xl my-6'>{feedback}</p>
    </div>
  );
};

export default LearnFrame;
