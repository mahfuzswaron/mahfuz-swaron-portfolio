import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroTitle from './HeroTitle';
import Button from '../common/Button';
import heroImg from '../../assets/images/web-developer.svg';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[5vw] py-[10vw] items-center'>
            <div>
                <HeroTitle />
                <div className='flex space-x-5 mb-5 my-10'>
                    <Link
                        className=''
                        href={"#contact"}
                        target="_blank"
                        rel="noreferrer"
                    > <Button type={"secondary"}> CONTACT </Button> </Link>
                    <Link
                        className=''
                        href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                        target="_blank"
                        rel="noreferrer"
                    >  <Button type={"primary"}> RESUME </Button> </Link>
                </div>
            </div>
            <Image src={heroImg} alt='web-developer' ></Image>
        </div>
    );
};

export default HeroSection;