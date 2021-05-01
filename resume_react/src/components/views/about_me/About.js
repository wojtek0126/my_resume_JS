import React from 'react';
import Image from '../../atoms/Image';
import Intersection from '../../atoms/Intersection';


const About = () => {
    return (
        <>
        <Intersection text={`About me`} />
       <div className="about-container" id="about-wrapper">           
           <Image />
           <div className="about-text-area">I am computer passionate, looking forward to enter 
           professional software development world. I enjoy making apps. I enjoy finding defects in apps and fixing them.           
           My programming journey started in 2018.
           I have ISTQB fundamental level certificate, 
           completed Python bootcamp, and remote JavaScript React course. 
           I have a year of experience working as QA debug technician with server components.
           My hobbies are martial arts, video games and personal development. I like to learn and improve constantly. 
           </div>
       </div>
       </>
    )
}

export default About;