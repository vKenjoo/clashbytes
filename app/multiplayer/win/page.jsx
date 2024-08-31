'use client'

import React from 'react';
import { useRouter } from "next/navigation";

const Win = () => {
    const router = useRouter();

    return (
        <div
            className="flex flex-grow items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/MULTIPLAY/LAST_WINNER.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundClip: 'border-box',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <button
                onClick={() => router.push('/')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl fixed bottom-24"
            >
                Go to Home
            </button>
        </div>
    );
};

export default Win;
