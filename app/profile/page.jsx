"use client";

import React from 'react';
import Link from 'next/link'; // Next.js Link import

const Profile = () => {
    return (
        <div className="flex-grow bg-[url('/.CLASHBYTES/clashbyteprofile.svg')] bg-cover bg-center bg-clip-border bg-fixed">
            <Link href="/">
                <img src="/.CLASHBYTES/buttons/back-button.svg" className="fixed bottom-12 left-52 max-w-64"/>
            </Link>
        </div>
    );
};

export default Profile;
