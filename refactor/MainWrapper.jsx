// MainWrapper.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const MainWrapper = () => {
    const [tokenCount, setTokenCount] = useState(42); // Initial token count

    // Function to handle using a token
    const useToken = () => {
        if (tokenCount > 0) {
            setTokenCount(tokenCount - 1);
            return true;
        } else {
            alert('No tokens available!');
            return false;
        }
    };

    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header tokenCount={tokenCount} />
            <div className='flex-auto'>
                <div className='bg-[url("/GENERAL/BACKGROUND_ONLY.svg")] bg-cover bg-fixed h-full'>
                    {/* The Outlet will render the matched route's component */}
                    <Outlet context={{ tokenCount, useToken }} />
                </div>
            </div>
        </div>
    );
};

export default MainWrapper;
