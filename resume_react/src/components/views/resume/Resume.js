import React from 'react';
import Intersection from '../../atoms/Intersection';
import { FaPython, FaHtml5, FaTrello, FaTools, FaGamepad, FaBug, FaMicrochip, FaGasPump, FaReact, FaJira, FaMicrosoft, FaSchool } from "react-icons/fa";
import { SiDjango, SiJavascript, SiMicrosoftaccess, SiPostgresql } from "react-icons/si";
import { MdLocalLaundryService, MdSchool } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { GiWhistle } from "react-icons/gi";


const Resume = () => {
    return (
       <div className="resume-container">
           <Intersection text={``} />
            <ul className="resume-tech-and-tools">
                <div className="resume-section-title">Tech and tools</div>
                <li><FaPython className="python"/>Python, Python-Django, Flask
                </li>
                <li><SiJavascript className="js" />JavaScript, Node.js, React.js
                </li>
                <li><FaHtml5 className="html"/>HTML, CSS, SASS, RWD
                </li>
                <li><SiPostgresql className="sql"/>MySQL, SQLite, postgreSQL
                </li>
                <li><FaTrello className="trello"/>Git, Trello, Jira, TestLink, SAP
                </li>
                <li><FaTools className="tools"/>PyCharm, WebStorm, Visual Studio, VSC
                </li>
                <li><FaGamepad className="game"/>C#: UNITY engine
                </li>
            </ul>
            <ul className="resume-languages">
            <div className="resume-section-title">Languages</div>

                <li>English: C1
                </li>
                <li>Polish: native
                </li>
            </ul>
            <ul className="resume-work-experience">
            <div className="resume-section-title">Work experience</div>
                <li><FaBug className="bug"/><FaMicrochip className="microchip"/>01-12.2019 -Debug technician, module testing. My
                    main role was finding defects and repairing
                    hardware parts. DELL EMC Ovens, Cork.
                    References: Brian Northridge(debug supervisor):
                    353 21 4281904
                </li>
                <li><MdLocalLaundryService className="laundry"/>09.2016 - 09.2017 - Dry cleaners general operative
                    Westward Cleaners, Ballincollig, Ireland
                </li>
                <li><FaGasPump className="gas"/>08.2008 - 09.2016 Retail assistant with supervisor
                    duties. Topaz Energy Ireland, various gas stations.
                    Cork, Ireland
                </li>
            </ul>
            <ul className="resume-education">
            <div className="resume-section-title">Education</div>
                <li><FaReact className="react"/><SiJavascript className="js"/>01.2021 - Finished Frontend JavaScript
                    React premium course,.Coders Lab,
                    Warsaw, Poland - remote
                </li>
                <li><FaBug className="bug"/><FaJira className="jira"/>02.2020 - ISTQB Manual tester course,
                    achieved level 1 ISTQB certificate.
                    Coders Lab, Warsaw, Poland - remote
                </li>
                <li><FaPython className="python"/><SiDjango className="django"/> 09.2018 - Finished Backend Python
                    bootcamp. Coders Lab, Warsaw, Poland

                </li>
                <li><FaMicrosoft /><SiMicrosoftaccess /> 10.2018 - Achieved ECDL license level 1,
                    Solus, Cork, Ireland
                </li>
                <li><IoMdFootball /><GiWhistle />07.2014 - Finished Community Sports
                    Coaching Programme, Cork Sports
                    Partnership, Cork, Ireland
                </li>
                <li><FaSchool /><MdSchool />06.2004 - Finished High School of
                    Foreign Languages 'Avans' in Warsaw,
                    Poland
                </li>
            </ul>
            <ul className="resume-hobbies">
            <div className="resume-section-title">Hobbies</div>
                <li>Martial arts - I am training various martial arts since 2004. I am BJJ purple belt, currently
                    training kicboxing in Warsaw. I have experience competing in grappling, MMA, Muay
                    Thai and kickboxing. Also interested in HEMA - historical martial arts.
                </li>
                <li>Computer games - these hooked me since my childhood times when I first saw
                    computer and consoles. Currently I am more interested in learning how to make games
                    than playing them.
                </li>
                <li>Personal development - I like to constantly become better in everything I do. And it never
                    gets boring.
                </li>
            </ul>          
       </div>
    )
}

export default Resume;