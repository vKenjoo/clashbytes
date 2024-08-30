import React from 'react';
import { useNavigate } from 'react-router-dom';
import winnerImage from '/MULTIPLAY/LAST_WINNER.svg';

const Win = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${winnerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl absolute bottom-8"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                Go to Home
            </button>
        </div>
    );
};

export default Win;
