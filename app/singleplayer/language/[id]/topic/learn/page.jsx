"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link'

const Learn = () => {
  const { id } = useParams();

  return (
    <div className='flex flex-col items-center justify-center h-full py-12 px-4'>
      <div className='max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>Welcome to Learn to Code</h1>
        <p className='text-center text-gray-600'>Start your coding journey by watching the video and trying out the exercises below.</p>
        <div className='flex justify-center'>
          <Link href={`/singleplayer/language/${id}/topic/learn/start`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block transition duration-200'>
            Start Coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;
