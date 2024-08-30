import React from 'react';
import { useParams } from 'react-router-dom';
import languagesData from '../../languages.json';
import pythonCurriculum from './LanguageJSON/pythonCurriculum.json';

const Language = () => {
  const { id } = useParams();
  const language = languagesData.language.find(lang => lang.id === id);

  if (!language) {
    return <div>Language not found</div>;
  }

  const topics = pythonCurriculum.subtopics;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-white">{language.language}</h2>
      <p className="text-lg mb-4 text-white">{language.description}</p>
      
      <h3 className="text-2xl font-bold mb-4">Topics</h3>
      <ul className="list-disc pl-6 text-white">
        {topics.map(topic => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
