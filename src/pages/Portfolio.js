import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio-title'>Portfolio:</h1>
            <div className='portfolio-container'>
                <ul className='portfolio-list'>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>ALeNet, Inc. Demo Banking Portal</h2>
                        <p className='project-description'>
                            Throughout my time as an Intern Software Developer at <a href='http://www.alenet.com/index.php/en/' rel="noreferrer" target='_blank'>ALeNet, Inc.</a>
                            <br /> I worked on showcasing the API/Webservice functionality embedded into their financial CRM through this small demo banking portal. <br />
                            Throughout this project we had to transfer PHP Soap Webservices into a functional REST API for Clientix, their CRM. <br />
                            Then I developed this portal showcasing their login, two-factored signup, trust, transactions, and account API for banking services. <br />
                            At the end of this project, I also developed an API documentation page, unfortunately I cannot provide this documentation page because <br />
                            it is property of ALeNet, and you must be a Clientix Customer to access these functionalities. All of these were developed in React.js.
                            <br /> <br />Project Link: <a className='project-url' href='http://129.213.203.166/' rel="noreferrer" target='_blank'>Clientix Demo Banking Portal</a>
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>CodePen.io</h2>
                        <p className='project-description'>
                            I have worked on <a href='https://www.freecodecamp.org/' rel="noreferrer" target='_blank'>freeCodeCamp</a>  certifications throughout my time as a developer.
                            <br /> They require you to complete projects as part of the certification, some of the very first websites I ever built are in this page.
                            <br /> Some of them might be a little rudimentary but I have a place in my heart for all of them. Take a look at my journey as a developer.
                            <br /> <br /> Project Link: <a className='project-url' href='https://codepen.io/salegrettm' rel="noreferrer" target='_blank'>CodePen</a>
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>Other & Upcoming Projects</h2>
                        <p className='project-description'>
                            This Website! This was all built in React.js. I know WordPress exists, but I wanted to challenge myself and show what I could do with React. <br />
                            Some of the cool little animations and customization would not have been possible if I just used a website builder.
                            <br /> Take a look a the cool contact logos, or if you want an easter egg, <strong>hover your mouse over the glasses.</strong>
                            <br /> Right Now I am working on finishing all of freeCodeCamp's curriculum. <br />
                            In the proces, I will be elligible to apply for a Front-End Project with a non-profit organization of my choice, so look out for that soon!
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>Certifications</h2>
                        <ol className='certs'>
                            <li className='cert'><a href='https://www.freecodecamp.org/certification/salegrettm/responsive-web-design' rel="noreferrer" target='_blank'>Responsive Web Design</a>. (Completed 300hrs)</li>
                            <li className='cert'><a href='https://www.freecodecamp.org/certification/salegrettm/javascript-algorithms-and-data-structures' rel="noreferrer" target='_blank'>JavaScript Algorithms and Data Structures</a>. (Completed 300hrs)</li>
                            <li className='cert'><a href='https://www.freecodecamp.org/certification/salegrettm/front-end-development-libraries' rel="noreferrer" target='_blank'>Front End Development Libraries</a>. (Completed 300hrs)</li>
                            <li className='cert'>Front End Developer Certification (Expected Completion: August 2021 | 300hrs)</li>
                            <li className='cert'>Back End Developer Certification (Expected Completion: December 2021 | 2400hrs)</li>
                            <li className='cert'>UNL Computer Science Degree (Expected Completion: May 2022)</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
