"use client";
import React from 'react';
import Link from 'next/link'; // Import Link component from Next.js
import Header from '../components/header';  // Adjust the path as necessary
import Footer from '../components/footer';  // Adjust the path as necessary

const HomeFrame = () => {
    return (
        <div>
            <Header tokenCount={10} />  {/* Pass the actual token count */}
            <div className='bg-[url("/HOMEPAGE_COMPONENTS/HOMEPAGE.svg")] bg-cover bg-fixed h-full'>
                <div className='flex-row h-full justify-end items-stretch'>
                    <div className='flex items-center justify-center absolute top-30 left-20'>
                        <img className='inline-block h-24 w-30' src='/HOMEPAGE_COMPONENTS/STAR_ONLY.svg' alt="Star Only" />
                        <p className='inline-block text-white text-3xl w-30'>TechieKid</p>
                    </div>
                    <div className='flex-col items-end justify-end p-4 bottom-20 right-20 absolute'>
                        <div className='flex gap-4 mb-4'>
                            {/* <Link href="/multiplayer" passHref>
                                <img className='h-30 w-60 cursor-pointer' src='/HOMEPAGE_COMPONENTS/B_MULTIPLAYER_ONLY.png' alt="Multiplayer" />
                            </Link>
                            <Link href="/singleplayer" passHref>
                                <img className='h-30 w-60 cursor-pointer' src='/HOMEPAGE_COMPONENTS/B_SOLO_ONLY.png' alt="Singleplayer" />
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeFrame;
