import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className={`grid grid-cols-2 justify-around px-[5vw] py-5 bg-black text-white`}>
            <Link href="/" >Mahfuz Swaron</Link>
            <ul className={`flex justify-end space-x-8`}>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default NavigationBar;