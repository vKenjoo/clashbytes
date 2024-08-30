"use client";
import React from 'react';
import Link from 'next/link'; // Next.js Link import

const Header = ({ tokenCount }) => {
    return (
        <header className="w-screen bg-gray-800 text-white min-h-12 flex justify-center sticky">
            <div className="h-auto m-auto w-9/12 flex justify-between items-center py-1">
                <img className='h-8' src='/GENERAL/LOGO.svg' alt='Logo' />
                <nav>
                    <ul className="flex space-x-8 text-base">
                        <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                        <li><Link href="/singleplayer" className="hover:text-yellow-500">Singleplayer</Link></li>
                        <li><Link href="/multiplayer" className="hover:text-yellow-500">Multiplayer</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <span className="text-white text-base">Tokens:</span>
                    <span className="bg-yellow-500 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                        {tokenCount}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
