import React, { useState } from "react";
import { Slider } from 'react-burgers'
 
const Hamburger = () => {
  const [active, setActive] = useState(false);  



  const handleClick = () => {
    const menu = document.getElementById('menu');
  
    if(active === false) {
      setActive(true);      
    }
    else {
      setActive(false)
    }

    menu.classList.toggle("active-flex");
  } 
  
    return (
      <Slider active={active} onClick={handleClick}/>
    );

}

export default Hamburger;