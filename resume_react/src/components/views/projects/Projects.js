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
                    This app is my portfolio project, made for JavaScript React course. This project is made with
                    help of Trello board and was simulation of single two-week sprint. Currently I use it for learning purposes.
                    It is also my training tool for manual testing, JS, React and Cypress.
                    I like finding and fixing bugs and this app has plenty.
                    use mobile first principle in early stage and it has to be remade with cleaner JS and mobile first approach.
                    APIless demo version of this app is hosted with github.
                </div>
                <div className="projects-project--link">
                   <ButtonMenu text={`Link`} href={`/`} className={`projects-btn btn`}/>
                </div>
            </div>
        
        </div>
    )
}

export default Projects;