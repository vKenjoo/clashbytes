"use client"

import React from 'react';
import Link from 'next/link';

const HomeFrame = () => {
  return (
      <div className='h-full'>
        {/* //TODO: need na mahiwalay yung assets here kasi hindi ko mapush down yung asset (character) up
        para mag mukahng mas okay visually */}
        <div className='flex-row h-full justify-end items-stretch'>
          <div className='flex items-center justify-center absolute top-30 left-20'>
            <img className='inline-block h-24 w-30' src='/HOMEPAGE_COMPONENTS/STAR_ONLY.svg'/>
            <p className='inline-block text-white text-3xl w-30'>TechieKid</p>
          </div>
          <div className=' flex-col items-end justify-end p-4 bottom-20 right-20 absolute'>
            <div className='flex gap-4 mb-4'>
              <Link href="multiplayer"><img className='h-30 w-60' src='/HOMEPAGE_COMPONENTS/B_MULTIPLAYER_ONLY.png'/></Link>
              <Link href="singleplayer"><img className='h-30 w-60' src='/HOMEPAGE_COMPONENTS/B_SOLO_ONLY.png'/></Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeFrame;
