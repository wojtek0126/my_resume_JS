import React from 'react';

const Resume = () => {
    return (
       <div className="resume-container">
            <ul className="resume-tech-and-tools">
                <div className="resume-section-title">Tech and tools</div>
                <li>Python, Python-Django, Flask
                </li>
                <li>JavaScript, Node.js, React.js
                </li>
                <li>HTML, CSS, SASS, RWD
                </li>
                <li>MySQL, SQLite, postgreSQL
                </li>
                <li>Git, Trello, Jira, TestLink, SAP
                </li>
                <li>PyCharm, WebStorm, Visual Studio, VSC
                </li>
                <li>C#: UNITY engine
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
                <li>01-12.2019 -Debug technician, module testing. My
                    main role was finding defects and repairing
                    hardware parts . DELL EMC Ovens, Cork.
                    References: Brian Northridge(debug supervisor):
                    353 21 4281904
                </li>
                <li>09.2016 - 09.2017 - Dry cleaners general operative
                    Westward Cleaners, Ballincollig, Ireland
                </li>
                <li>08.2008 - 09.2016 Retail assistant with supervisor
                    duties. Topaz Energy Ireland, various gas stations.
                    Cork, Ireland
                </li>
            </ul>
            <ul className="resume-education">
            <div className="resume-section-title">Education</div>
                <li>01.2021 - Finished Frontend JavaScript
                    React premium course,.Coders Lab,
                    Warsaw, Poland - remote
                </li>
                <li>02.2020 - ISTQB Manual tester course,
                    achieved level 1 ISTQB certificate.
                    Coders Lab, Warsaw, Poland - remote
                </li>
                <li>09.2018 - Finished Backend Python
                    bootcamp. Coders Lab, Warsaw, Poland

                </li>
                <li>10.2018 - Achieved ECDL license level 1,
                    Solus, Cork, Ireland
                </li>
                <li>07.2014 - Finished Community Sports
                    Coaching Programme, Cork Sports
                    Partnership, Cork, Ireland
                </li>
                <li>06.2004 - Finished High School of
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