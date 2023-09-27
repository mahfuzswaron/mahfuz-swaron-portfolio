import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className={`grid grid-cols-2 justify-around px-[5vw] py-5 rounded-lg shadow-lg bg-slate-900 fixed top-0 w-full text-lg text-white `}>
            <Link href="/" >Mahfuz Swaron</Link>
            <ul className={`flex justify-end space-x-8 `}>
                <li className='hover:text-primary'><Link href={"/home"}>Home</Link> </li>
                <li className='hover:text-primary'><Link href={"/about"}>About</Link> </li>
                <li className='hover:text-primary'><Link href={"/skills"}>Skills</Link> </li>
                <li className='hover:text-primary'><Link href={"/projects"}>Projects</Link> </li>
                <li className='hover:text-primary'><Link href={"/contact"}>Contact</Link> </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;