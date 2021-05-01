import React from 'react';

const ButtonMenu = ({text, className, href}) => {
    return (
            <a className={className} href={href}>{text}</a>            
    )
}

export default ButtonMenu;