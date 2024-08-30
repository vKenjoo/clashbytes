import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ duration, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onComplete]);

    return (
        <div>
            <h1>Starting in: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</h1>
            <div className="svg-animation">
                {/* Insert your SVG animation here */}
            </div>
        </div>
    );
};

export default CountdownTimer;
