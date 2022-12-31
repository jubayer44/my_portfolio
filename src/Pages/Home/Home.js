import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className='mb-5'>
            <Navbar/>
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
};

export default Home;