"use client"

import React from 'react';
import Link from 'next/link';


const HomeFrame = () => {
    return (
        <section className='flex flex-grow bg-cb-homepage bg-cover bg-center bg-clip-border bg-fixed justify-center items-center'>
            <Link href="/profile" className='items-center fixed top-16 left-56 z-50'>
                <img className='max-h-60' src='/.CLASHBYTES/buttons/profile-button.svg'/>
            </Link>
            <div className="relative h-full w-full ">
                <img src="/.CLASHBYTES/spotlight.svg" className="absolute h-full w-full" />
                <img src="/.CLASHBYTES/languages/default.svg" className="absolute bottom-0 h-5/6 w-full "/>
            </div>
            <div className='fixed justify-end bottom-28 right-24 z-50'>
                <div className='inline-flex w-fit h-fit'>
                    {/*  Inefficient sizing due to not being an image, rather a div with background image*/}
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
