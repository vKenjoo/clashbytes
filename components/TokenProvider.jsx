"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export function TokenProvider({ children }) {
    const [token, setToken] = useState(null);
    const [unlockedCourses, setUnlockedCourses] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedCourses = JSON.parse(localStorage.getItem('unlockedCourses'));

        if (storedToken) {
            setToken(storedToken);
        }

        if (storedCourses) {
            setUnlockedCourses(storedCourses);
        }
    }, []);

    const updateToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    const unlockCourse = (courseId) => {
        if (token > 0) {
            const updatedCourses = [...unlockedCourses, courseId];
            setUnlockedCourses(updatedCourses);
            localStorage.setItem('unlockedCourses', JSON.stringify(updatedCourses));

            // Deduct a token
            const updatedToken = token - 1;
            updateToken(updatedToken);
        } else {
            console.log('Not enough tokens to unlock the course.');
        }
    };

    return (
        <TokenContext.Provider value={{ token, unlockedCourses, updateToken, unlockCourse }}>
            {children}
        </TokenContext.Provider>
    );
}

export function useTokenContext() {
    return useContext(TokenContext);
}
