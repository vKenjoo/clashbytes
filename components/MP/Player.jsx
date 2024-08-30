import React from 'react';
import DamageIndicator from './DamageIndicator'; // Import DamageIndicator
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Player = ({ name, health, avatar, isDamaged }) => {
    // Create an array to represent the health with hearts
    const hearts = Array(health).fill(0);

    return (
        <div className="flex flex-col items-center">
            <DamageIndicator isDamaged={isDamaged} />
            <div className="mt-2 w-80 h-80"> {/* Adjusted size for larger avatars */}
                
                <img src={avatar} alt={`${name} avatar`} className="w-full h-full" />   
                
            </div>
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="flex space-x-1 mt-1">
                {hearts.map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faHeart} className="text-red-600" />
                ))}
            </div>
        </div>
    );
};

export default Player;
