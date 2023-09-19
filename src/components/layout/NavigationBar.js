import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className={`grid grid-cols-2 justify-around px-[5vw] py-5 bg-black text-white`}>
            <Link href="/" >Mahfuz Swaron</Link>
            <ul className={`flex justify-end space-x-8`}>
                <li><Link href={"/home"}>Home</Link> </li>
                <li><Link href={"/Skills"}>Skills</Link> </li>
                <li><Link href={"/Projects"}>Projects</Link> </li>
                <li><Link href={"/About"}>About</Link> </li>
                <li><Link href={"/Contact"}>Contact</Link> </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;