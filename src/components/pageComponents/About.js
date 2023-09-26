import React from 'react';
import mahfuzPic from "../../assets/images/profile-pic.png"
import Image from 'next/image';

const About = () => {
    return (
        <section className='p-[5vw]'>
            <h2 className='text-5xl mb-20'>Me in a paragraph</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <Image src={mahfuzPic} alt='mahfuz swaron image' className='w-3/4' ></Image>

                <p className='px-5 text-2xl leading-relaxed  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure tempora sit, odit at qui, minima sunt esse consequuntur nisi vel recusandae, aperiam cum perferendis amet quis asperiores. Perferendis, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam incidunt, vel excepturi nesciunt, in rerum veritatis deleniti iusto nobis pariatur. Fuga aliquam, omnis ipsum natus eveniet aliquid itaque magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro quisquam magni numquam aperiam iure, voluptates vero necessitatibus itaque voluptatibus. Doloribus magni fuga perferendis maxime, porro nostrum quasi vel molestias.</p>
            </div>
        </section>
    );
};

export default About;