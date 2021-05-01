import React from 'react';
import ButtonMenu from '../atoms/ButtonMenu';
import {Link} from 'react-scroll';

const Nav = () => {
    return (        
        <div className="nav-container" id="menu">
            <Link to="about-wrapper" smooth={true} duration={1000}>
               <ButtonMenu className={"menu-btn btn active-flex"} text={`About me`} href={`/`} />   
            </Link> 
            <Link to="resume-wrapper" smooth={true} duration={1000}>
               <ButtonMenu className={"menu-btn btn active-flex"} text={`My resume`} href={`/`} />  
            </Link>
            <Link to="project-wrapper" smooth={true} duration={1000}>
                <ButtonMenu className={"menu-btn btn active-flex"} text={`My projects`} href={`/`} />  
            </Link> 
            <Link to="contact-wrapper" smooth={true} duration={1000}>
                <ButtonMenu className={"menu-btn btn active-flex"} text={`Contact details`} href={`/`} />    
            </Link>              
        </div>
    )
}

export default Nav;