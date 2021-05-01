import React from 'react';
import ButtonMenu from '../atoms/ButtonMenu';

const Nav = () => {
    return (        
        <div className="nav-container" id="menu">
            <ButtonMenu className={"menu-btn btn active-flex"} text={`About me`} href={`/`} />      
            <ButtonMenu className={"menu-btn btn active-flex"} text={`My resume`} href={`/`} />  
            <ButtonMenu className={"menu-btn btn active-flex"} text={`My projects`} href={`/`} />  
            <ButtonMenu className={"menu-btn btn active-flex"} text={`Contact details`} href={`/`} />              
        </div>
    )
}

export default Nav;