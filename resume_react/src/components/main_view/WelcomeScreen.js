import React from 'react';
import Image from '../atoms/Image';
import funnyCat2 from '../../assets/images/funny-cats-2-1280x720.jpg';
import funnyCat from '../../assets/images/funny-cat.webp';


const WelcomeScreen = () => {
    return (
        <div className="header-welcome-container">            
                 <Image src={funnyCat2} className={`header-welcome-image-1 active`} alt={`working`} /> 
                 <Image src={funnyCat} className={`header-welcome-image-2 active`} alt={`weird-cats-image`} />               
        </div>
    )
}

export default WelcomeScreen;