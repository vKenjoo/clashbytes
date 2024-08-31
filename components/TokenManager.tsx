// NO USAGES

import React, { useState } from 'react';

// Define a type for the TokenManager's props
interface TokenManagerProps {
    initialTokenCount: number;
}

const TokenManager: React.FC<TokenManagerProps> = ({ initialTokenCount }) => {
    const [tokenCount, setTokenCount] = useState<number>(initialTokenCount);

    const useToken = () => {
        if (tokenCount > 0) {
            setTokenCount(tokenCount - 1);
            // Implement further logic to access the course here
            alert('Token used for accessing the course!');
        } else {    
            alert('No tokens available!');
        }
    };

    return (
        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Token Management</h2>
            <div className="mb-4">
                <p className="text-lg">Available Tokens: <span className="font-semibold">{tokenCount}</span></p>
            </div>
            <button 
                onClick={useToken}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Use Token
            </button>
        </div>
    );
};

export default TokenManager;
