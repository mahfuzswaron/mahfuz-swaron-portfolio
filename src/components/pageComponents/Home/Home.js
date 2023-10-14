import React from 'react';
import HeroSection from './HeroSection';
import About from '../About';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <section>
            <HeroSection />
            <About />
            <Skills />
        </section>
    );
};

export default Home;