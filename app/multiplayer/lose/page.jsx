'use client'

import React from 'react';
import { useRouter} from "next/navigation";

const Lose = () => {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen overflow-hidden"
            style={{
                backgroundImage: `url('/MULTIPLAY/LAST_LOSE.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <button
                onClick={() => router.push('/')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl absolute bottom-8"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                Go to Home
            </button>
        </div>
    );
};

export default Lose;
