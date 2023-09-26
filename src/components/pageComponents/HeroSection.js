import React from 'react';
import HeroTitle from './HeroTitle';
import heroImg from '../../assets/images/web-developer.svg';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-[5vw] items-center'>
            <>
                <HeroTitle />
            </>

            <Image src={heroImg} alt='web-developer' ></Image>

        </div>
    );
};

export default HeroSection;