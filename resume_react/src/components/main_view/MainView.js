import React from 'react';
import About from '../views/about_me/About';
import Contact from '../views/contact/Contact';
import Projects from '../views/projects/Projects';
import Resume from '../views/resume/Resume';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import WelcomeScreen from './WelcomeScreen';

const MainView = () => {
    return (
        <>            
            <Header />
            <Nav />
            <WelcomeScreen />
            <About />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default MainView;