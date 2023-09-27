import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className={`grid grid-cols-2 justify-around px-[5vw] py-5 border-b rounded-lg border-b-primary text-white`}>
            <Link href="/" >Mahfuz Swaron</Link>
            <ul className={`flex justify-end space-x-8`}>
                <li><Link href={"/home"}>Home</Link> </li>
                <li><Link href={"/about"}>About</Link> </li>
                <li><Link href={"/skills"}>Skills</Link> </li>
                <li><Link href={"/projects"}>Projects</Link> </li>
                <li><Link href={"/contact"}>Contact</Link> </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;