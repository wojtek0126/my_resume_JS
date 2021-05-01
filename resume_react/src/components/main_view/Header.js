import React from 'react';
import Hamburger from '../features/Hamburger';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";


const Header = () => {
    return (
        <>
        <div className="scroll-up-arrow"><ScrollUpButton /></div>        
        <div className="nav-header-container">
               <Hamburger />    
        </div>
        </>
    )
}

export default Header;