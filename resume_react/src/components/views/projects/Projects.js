import React from 'react';
import ButtonMenu from '../../atoms/ButtonMenu';
import funnyCat from '../../../assets/images/giveaway.png';
import Image from '../../atoms/Image';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className={`section-title`}>My projects</div>
            <div className="projects-project">
                <div className="projects-project--title">
                    Giveaway
                </div>
                <div className="projects-two-images">
                    <Image src={funnyCat} className={`projects-image active`} alt={`giveaway-image`} /> 

                </div>
                <div className="projects-project--link">
                   <ButtonMenu text={`Link`} href={`/`} className={`projects-btn btn`}/>
                </div>
            </div>
        
        </div>
    )
}

export default Projects;