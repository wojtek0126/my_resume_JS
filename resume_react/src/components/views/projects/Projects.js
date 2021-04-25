import React from 'react';
import ButtonMenu from '../../atoms/ButtonMenu';
import funnyCat from '../../../assets/images/giveaway.png';
import Image from '../../atoms/Image';
import Intersection from '../../atoms/Intersection';

const Projects = () => {
    return (
        <div className="projects-container">
           <Intersection text={`My projects`} />
            <div className="projects-project">
                <div className="projects-project--title">
                    Giveaway
                </div>           
                <div className="projects-images">
                    <Image src={funnyCat} className={`projects-image active`} alt={`giveaway-image`} /> 
                </div>
                <div className="projects-project--description">
                    This app is my portfolio project, made for my JavaScript React course. I use it for learning purposes.
                    At the moment this app is my training tool for manual testing,I also use it to practice 
                    test automation with Cypress and to experiment in general.
                </div>
                <div className="projects-project--link">
                   <ButtonMenu text={`Link`} href={`/`} className={`projects-btn btn`}/>
                </div>
            </div>
        
        </div>
    )
}

export default Projects;