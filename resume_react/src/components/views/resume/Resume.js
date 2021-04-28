import React from 'react';
import Intersection from '../../atoms/Intersection';
import { FaPython, FaHtml5, FaTrello, FaTools, FaGamepad, FaBug, FaMicrochip, FaGasPump, FaReact, FaJira, FaMicrosoft, FaSchool, FaMedal } from "react-icons/fa";
import { SiDjango, SiJavascript, SiMicrosoftaccess, SiPostgresql } from "react-icons/si";
import { MdLocalLaundryService, MdSchool } from "react-icons/md";
import { IoMdChatbubbles, IoMdFootball } from "react-icons/io";
import { GiMedallist, GiWhistle } from "react-icons/gi";


const Resume = () => {
    return (
       <div className="resume-container">
           <Intersection text={`My resume`} />
           <div className="resume-section-title">Tech and tools</div>
            <ul className="resume-tech-and-tools">               
                <li><FaPython className="python"/>Python, Python-Django, Flask
                </li>
                <li><SiJavascript className="js" />JavaScript, Node.js, React.js
                </li>
                <li><FaHtml5 className="html"/>HTML, CSS, SASS
                </li>
                <li><SiPostgresql className="sql"/>MySQL, SQLite, postgreSQL, MsAccess
                </li>
                <li><FaTrello className="trello"/>Git, Trello, Jira, TestLink, SAP
                </li>
                <li><FaTools className="tools"/>PyCharm, WebStorm, Visual Studio, VSC
                </li>
                <li><FaGamepad className="game"/>C#: UNITY engine
                </li>
            </ul>
            <div className="resume-section-title">Languages</div>
            <ul className="resume-languages">
                <li><IoMdChatbubbles className="bubble"/>English: C1
                </li>
                <li><IoMdChatbubbles className="bubble"/>Polish: native
                </li>
            </ul>
            <div className="resume-section-title">Work experience</div>
            <ul className="resume-work-experience">           
                <li><FaBug className="bug"/><FaMicrochip className="microchip"/>01-12.2019 - QA - Debug technician, module testing. 
                My team was responsible for finding defects and fixing hardware parts . DELL EMC Ovens, Cork.
                    References: Brian Northridge(debug supervisor):
                    353 21 4281904
                </li>
                <li><MdLocalLaundryService className="laundry"/>09.2016 - 09.2017 - I was general operative at
                    Westward Cleaners, Ballincollig, Ireland
                </li>
                <li><FaGasPump className="gas"/>08.2008 - 09.2016 I was working as retail assistant with supervisor
                    duties. Topaz Energy Ireland, various gas stations.
                    Cork, Ireland
                </li>
            </ul>
            <div className="resume-section-title">Education</div>
            <ul className="resume-education">          
                <li><FaReact className="react"/><SiJavascript className="js"/>01.2021 - Frontend JavaScript
                    React premium. Coders Lab,
                    Warsaw, Poland - remote
                </li>
                <li><FaBug className="bug"/><FaJira className="jira"/>02.2020 - ISTQB Manual tester course,
                    achieved level 1 ISTQB certificate.
                    Coders Lab, Warsaw, Poland - remote
                </li>
                <li><FaPython className="python"/><SiDjango className="django"/> 09.2018 - Backend Python
                    bootcamp. Coders Lab, Warsaw, Poland

                </li>
                <li><FaMicrosoft className="ms"/><SiMicrosoftaccess className="access"/> 10.2018 - Achieved ECDL license level 1,
                    Solus, Cork, Ireland
                </li>
                <li><IoMdFootball className="football"/><GiWhistle className="whistle"/>07.2014 - Community Sports
                    Coaching Programme, Cork Sports
                    Partnership, Cork, Ireland
                </li>
                <li><FaSchool className="school"/><MdSchool className="school2"/>06.2004 - High School of
                    Foreign Languages 'Avans' in Warsaw,
                    Poland
                </li>
            </ul>
            <div className="resume-section-title">Hobbies</div>
            <ul className="resume-hobbies">          
                <li><FaMedal className="medal"/>Martial arts - I am training various martial arts since 2004. I have experience competing in grappling, MMA, Muay
                    Thai and kickboxing. I am interested in HEMA - historical martial arts.
                </li>
                <li><FaGamepad className="game"/>Computer games - games hooked me since my childhood times when I first saw
                    computer and consoles. Currently I am more interested in learning how to make them
                    than just playing them. 
                </li>
                <li><GiMedallist className="win"/>Personal development - I like to constantly become better in everything I do. 
                Improving my mindset never gets boring.
                </li>
            </ul>          
       </div>
    )
}

export default Resume;