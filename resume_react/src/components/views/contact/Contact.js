import React from 'react';
import Image from '../../atoms/Image';
import Intersection from '../../atoms/Intersection';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <>
        <Intersection text={`Contact me`} />
       <div className="contact-container" id="contact-wrapper">           
           <Image />
           <div className="contact-text-area">Wojciech Tomaszewski
           </div>
           <div className="contact-text-area">Current location: Warsaw, Poland
           </div>
           <div className="contact-text-area">Email: wojtektomaszewski012@gmail.com
           </div>
           <div className="contact-text-area">Mobile: +48603986821
           </div>
           <div className="contact-link-icons">
                <div className="contact-link-fb">
                    <a href="https://www.facebook.com/wojciech.tomaszewski.7/">
                        <FaFacebookSquare />
                    </a>                  
                </div>
                <div className="contact-link-linkedin">
                    <a href="https://www.linkedin.com/in/wojtomaszewski/">
                        <FaLinkedin />
                    </a>                  
                </div>
                <div className="contact-link-github">
                    <a href="https://github.com/wojtek0126">
                        <FaGithubSquare />
                    </a>                 
                </div>
           </div>
       </div>
       </>
    )
}

export default Contact;