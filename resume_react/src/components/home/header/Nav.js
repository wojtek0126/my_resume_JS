import React from 'react';
import ButtonMenu from '../../atoms/ButtonMenu';

const Nav = () => {
    return (
        <div className="nav-container">
            <ButtonMenu text={`My details`}/>      
            <ButtonMenu text={`About me`}/>  
            <ButtonMenu text={`My resume`}/>  
            <ButtonMenu text={`Projects in progress`}/>              
        </div>
    )
}

export default Nav;