import React from 'react';
import Image from '../../atoms/Image';
import Intersection from '../../atoms/Intersection';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <>
        <Intersection text={`Contact me`} />
       <div className="contact-container">           
           <Image />
           <div className="contact-text-area">Full name: Wojciech Tomaszewski
           </div>
           <div className="contact-text-area">Current location: Warsaw, Poland
           </div>
           <div className="contact-text-area">Email: wojtektomaszewski012@gmail.com
           </div>
           <div className="contact-text-area">Mobile: +48603986821
           </div>
           <div className="contact-link-icons">
                <div className="contact-link-fb">
                    <FaFacebookSquare />
                </div>
                <div className="contact-link-linkedin">
                    <FaLinkedin />
                </div>
                <div className="contact-link-github">
                    <FaGithubSquare />
                </div>
           </div>
       </div>
       </>
    )
}

export default Contact;