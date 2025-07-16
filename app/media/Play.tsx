import React from 'react';

const PlayIcon = ({ className = 'w-6 h-6', fill = 'currentColor' }) => {
    return (
        <span className={`flex items-center justify-center border border-white bg-black/40 rounded-full ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className='w-10 h-10' fill={fill}>
                <path d="M20 10c0 1.1-2 2-2 2L2.3 19.9c-1 .5-2.3-.4-2.3-1.5V1.6C0 .5.8-.4 2.3.2L18 8s2 .9 2 2z" />
            </svg>
        </span>
    );
};

export default PlayIcon;