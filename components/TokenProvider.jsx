"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import {useRouter} from "next/navigation";

const TokenContext = createContext();


export function TokenProvider({ children }) {
    const router = useRouter()
    const [token, setToken] = useState(null);
    const [unlockedCourses, setUnlockedCourses] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedCourses = JSON.parse(localStorage.getItem('unlockedCourses'));

        if (storedToken) {
            setToken(parseInt(storedToken, 10))
        } else {
            setToken(9);
            localStorage.setItem('token', 5);
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

        if (unlockedCourses.includes(courseId)) {
            console.log('Course is already unlocked.');
            router.push(`singleplayer/language/${courseId}`);
        }
        else if (token > 0) {
            const updatedCourses = [...unlockedCourses, courseId];
            setUnlockedCourses(updatedCourses);
            localStorage.setItem('unlockedCourses', JSON.stringify(updatedCourses));
            router.push(`singleplayer/language/${courseId}`);

            // Deduct a token
            const updatedToken = token - 1;
            updateToken(updatedToken);
        } else {
            alert('You do not have enough tokens to unlock this course.');
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
