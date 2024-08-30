import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeFrame from './components/HomeFrame';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import Learn from './components/SP/topic/Learn';
import LearnFrame from './components/Pages/LearnFrame';
import QuizFrame from './components/Pages/QuizFrame';
import Quiz from './components/SP/topic/Quiz/Quiz';
import Result from './components/SP/topic/Quiz/Result';
import MultiPlayerFrame from './components/Layout/MultiPlayerFrame';
import Battle from './components/MP/Battle';
import Confirm from './components/MP/Confirm';
import Win from './components/MP/Win';
import Lose from './components/MP/Lose';

const App = () => {
    const [tokenCount, setTokenCount] = useState(42); // Initial token count
    const [unlockedCourses, setUnlockedCourses] = useState([]); // Courses user has unlocked

    return (
        <Router>
            <div className='flex flex-col h-screen justify-between'>
                <Header tokenCount={tokenCount} />
                <div className='flex-auto'>
                    <div className='bg-[url("/GENERAL/BACKGROUND_ONLY.svg")] bg-cover bg-fixed h-full'>
                        <Routes>
                            <Route path="/" element={<HomeFrame />} />
                            <Route path="/singleplayer" element={
                                <SinglePlayerFrame 
                                    tokenCount={tokenCount} 
                                    setTokenCount={setTokenCount} 
                                    unlockedCourses={unlockedCourses}
                                    setUnlockedCourses={setUnlockedCourses}
                                />
                            } />
                            <Route path="/multiplayer" element={<MultiPlayerFrame />} />
                            <Route path="/language/:id" element={<LanguageTopics />} />
                            <Route path="/language/:id/topic/learn" element={<Learn />} />
                            <Route path="/language/:id/topic/learn/frame" element={<LearnFrame />} />
                            <Route path="/language/:id/topic/quiz/*" element={<QuizFrame />} />
                            <Route path="/language/:id/topic/quiz" element={<Quiz />} />
                            <Route path="/result" element={<Result />} />
                            <Route path="/confirm" element={<Confirm />} />
                            <Route path="/battle" element={<Battle />} />
                            <Route path="/win" element={<Win />} />
                            <Route path="/lose" element={<Lose />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
