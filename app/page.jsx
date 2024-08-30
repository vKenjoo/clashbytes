"use client"

import React from 'react';
import Link from 'next/link';


const HomeFrame = () => {
    return (
        <section
            className='flex flex-grow bg-cb-homepage bg-cover bg-center bg-clip-border bg-fixed justify-end items-stretch '>
            <Link href="/profile" className='items-center fixed top-16 left-56 z-10'>
                <img className='max-h-60' src='/.CLASHBYTES/buttons/profile-button.svg'/>
            </Link>
            <div className="fixed top-20 m-auto z-1">
                <img src="/.CLASHBYTES/languages/default.svg" className="h-96 "/>
            </div>
            <div className='flex justify-end bottom-28 right-24 fixed z-10'>
                <div className='inline-flex w-fit h-fit'>
                    {/*  Inefficient sizing due to not being an iage, rather a div with background image*/}
                    <Link href="multiplayer">
                        <div
                            className="bg-[url('/.CLASHBYTES/buttons/battle-button.svg')] hover:bg-[url('/.CLASHBYTES/buttons/battle-button-active.svg')] w-80 h-40 bg-contain bg-no-repeat bg-center"></div>
                    </Link>
                    <Link href="singleplayer">
                        <div
                            className="bg-[url('/.CLASHBYTES/buttons/solo-button.svg')] hover:bg-[url('/.CLASHBYTES/buttons/solo-button-active.svg')] w-80 h-40 bg-contain bg-no-repeat bg-center"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeFrame;
