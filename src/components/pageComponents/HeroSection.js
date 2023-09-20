import React from 'react';
import HeroTitle from './HeroTitle';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className=''>
                <HeroTitle />
            </div>
            <div className='bg-red-500'>Image</div>
        </div>
    );
};

export default HeroSection;