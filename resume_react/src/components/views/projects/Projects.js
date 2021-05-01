import React from 'react';
import ButtonMenu from '../../atoms/ButtonMenu';
import funnyCat from '../../../assets/images/giveaway.png';
import Image from '../../atoms/Image';
import Intersection from '../../atoms/Intersection';

const Projects = () => {
    return (
        <div className="projects-container" id="project-wrapper">
           <Intersection text={`My projects`} />
            <div className="projects-project">
                <div className="projects-project--title">
                    Giveaway
                </div>           
                <div className="projects-images">
                    <Image src={funnyCat} className={`projects-image active`} alt={`giveaway-image`} /> 
                </div>
                <div className="projects-project--description">
                    This app is my portfolio project, made for JavaScript React course. This project is made with
                    guidance of Trello board and was simulation of single two-week sprint. 
                    Currently I use it to train manual testing, JS, React and Cypress.
                    I like finding and fixing bugs and this app has plenty.                 
                </div>
                <div className="projects-project--link">
                   <ButtonMenu text={`Link`} href={`https://wojtek0126.github.io/Portfolio_react_app/`} className={`projects-btn btn`}/>
                </div>
            </div>
        
        </div>
    )
}

export default Projects;