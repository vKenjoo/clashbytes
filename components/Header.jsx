"use client";

import React from 'react';
import Link from 'next/link'; // Next.js Link import
import { useTokenContext } from "@/components/TokenProvider";

const Header = () => {
    const { token } = useTokenContext();

    return (
        <header className="flex w-full bg-gray-800 text-white min-h-16 justify-center overflow-auto">
            <div className="h-auto m-auto w-9/12 flex justify-between items-center py-1 px-2">
                <img className='h-6' src='/.CLASHBYTES/logo.svg' alt='Logo'/>
                <div className="flex items-center space-x-4">
                    <nav className="mr-10">
                        <ul className="flex space-x-8 text-base">
                            <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                            <li><Link href="/singleplayer" className="hover:text-yellow-500">Singleplayer</Link></li>
                            <li><Link href="/multiplayer" className="hover:text-yellow-500">Multiplayer</Link></li>
                        </ul>
                    </nav>
                    <div className="">
                        <span className="text-white text-base mr-2">Tokens:</span>
                        <span className="bg-yellow-500 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                            {token}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
