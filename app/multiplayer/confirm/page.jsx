"use client"

import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";

const Confirm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSlide = JSON.parse(searchParams.get('state'))

  if (!selectedSlide) {
    return <p>No slide selected.</p>;
  }

  const handleConfirm = () => {
    router.push('/multiplayer/battle');
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black bg-opacity-75 p-10 md:p-8 rounded-lg text-center max-w-l mx-auto">
        <h1 className="text-5xl md:text-6l font-bold mb-6">Are you ready for battle?</h1>
        <p className="text-xl md:text-2xl mb-8">Confirm to proceed to the battle arena.</p>
        <div className="mb-8">
          <img src={selectedSlide.image} alt={selectedSlide.title} className="w-48 h-48 object-cover rounded-lg mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold">{selectedSlide.title}</h2>
          <p className="text-lg md:text-xl mt-2">{selectedSlide.description}</p>
        </div>
        <button
          onClick={handleConfirm}
          className="bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg transition-colors duration-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirm;
