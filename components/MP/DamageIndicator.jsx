import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import './DamageIndicator.css'; 

const DamageIndicator = ({ isDamaged }) => {
    const [showDamage, setShowDamage] = useState(false);

    useEffect(() => {
        if (isDamaged) {
            setShowDamage(true);
            const timer = setTimeout(() => setShowDamage(false), 1000); // Show for 1 second
            return () => clearTimeout(timer);
        }
    }, [isDamaged]);

    return (
        <div className={`absolute ${isDamaged ? 'shake' : ''} w-48 h-48`}>
            {showDamage && (
                <FontAwesomeIcon
                    icon={faSkull}
                    className="absolute top-24 left-24 m-auto z-10 text-red-600 text-6xl animate-ping"
                />
            )}
        </div>
    );
};

export default DamageIndicator;
