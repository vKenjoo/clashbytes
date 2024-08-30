import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import languages from '../../languages.json'; // Verify path correctness
import pythonCurriculum from './LanguageJSON/pythonCurriculum.json';

const LanguageTopics = () => {
  const { id } = useParams();
  const [languageData, setLanguageData] = useState(null);

  useEffect(() => {
    // Find languageData based on id
    const foundLanguage = languages.language.find(lang => lang.id === id);

    if (foundLanguage) {
      setLanguageData(foundLanguage);
    } else {
      setLanguageData(null); // Language not found
    }
  }, [id]); // Run effect whenever id changes

  if (!languageData) {
    return <div>Language not found for ID: {id}</div>;
  }

  const { language, description } = languageData;
  const subtopics = pythonCurriculum.pythonCurriculum.subtopics || []; // Initialize as empty array if undefined

  return (
    <div className='p-6 grid place-items-center'>
      <h1 className='text-4xl font-bold mb-4 text-white mt-10'>{language}</h1>
      <p className='text-lg mb-6 text-white'>{description}</p>
      
      {/* Check if subtopics exists and is an array */}
      {Array.isArray(subtopics) && subtopics.length > 0 && (
        subtopics.map((subtopic) => (

          <div key={subtopic.id} className='mb-4 flex flex-col text-gray-700 bg-white shadow-lg w-full max-w-2xl rounded-xl items-center justify-center p-6'>
            <h2 className='text-2xl font-bold mb-1 text-center'>{subtopic.title}</h2>
            <nav className='w-full'>
              <ul className='list-disc list-inside transition-all rounded-lg outline-none text-left w-full max-w-[90%] hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'>
                {Array.isArray(subtopic.lessons) && subtopic.lessons.map((lesson, index) => (
                  <li key={index} className='p-1'>{lesson}</li>
                ))}
              </ul>
            </nav>
          </div>
          
        ))
      )}

      <div className="mt-6 mb-6">
              <Link to={`/language/${id}/topic/learn`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Start Your Journey
              </Link>
              <Link to={`/language/${id}/topic/quiz`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Test My Mastery
              </Link>
      </div>
    </div>
  );
};

export default LanguageTopics;
