import React from 'react';
import About from '../views/about_me/About';
import Projects from '../views/projects/Projects';
import Resume from '../views/resume/Resume';
import Footer from './Footer';
import Nav from './Nav';
import WelcomeScreen from './WelcomeScreen';

const MainView = () => {
    return (
        <>
            <Nav />
            <WelcomeScreen />
            <About />
            <Resume />
            <Projects />
            <Footer />
        </>
    )
}

export default MainView;