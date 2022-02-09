import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio-title'>Portfolio:</h1>
            <div className='portfolio-container'>
                <ul className='portfolio-list'>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>ALeNet, Inc. Demo Banking PWA</h2>
                        <p className='project-description'>
                            Throughout my time as an Intern Software Developer at <a href='http://www.alenet.com/index.php/en/' rel="noreferrer" target='_blank'>ALeNet, Inc.</a>
                            <br /> I worked on showcasing the API/Webservice functionality embedded into their financial CRM through this small demo banking portal. <br />
                            Throughout this project we had to transfer PHP Soap Webservices into a functional REST API for Clientix, their CRM. <br />
                            Then I developed this PWA showcasing their login, two-factored authentication, trust, transactions, and account API for banking services. <br />
                            The github for this project is unfortunately not open source and I will not be able to share the details of the implementation. All of these were developed in React.js.
                            <br /> <br />Project Link: <a className='project-url' href='https://clientix-portal-demo.netlify.app/' rel="noreferrer" target='_blank'>Clientix Demo Banking Portal</a>
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>Nebraska Election Protection Program PWA</h2>
                        <p className='project-description'>
                            I am currently working with a team of UNL students in developing a PWA for the Nebraska Poll Observers.
                            <br /> This project has been done in conjuction with the NE Government: Election Protection Program.
                            <br /> Please bear in mind that the project is not completed yet. All development was done by a team of 6 students including myself.
                            <br /> Throughout this project I was tasked with designing the Poll Observer form that will be used by Observers to describe the quality of Poll 
                            <br /> standards throught the elections in the state, among other things. It is really cool to think that in every election in the state, 
                            <br /> an app that I designed will be used. The project was developed in React.js, it uses MongoDB atlas as its backend.
                            <br /> <br /> Project Link: <a className='project-url' href='https://epp-server.herokuapp.com/' rel="noreferrer" target='_blank'>NE, EPP PWA</a>
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>Other & Upcoming Projects</h2>
                        <p className='project-description'>
                            This Website! This was all built in React.js. I know WordPress exists, but I wanted to challenge myself and show what I could do with React. <br />
                            Some of the cool little animations and customization would not have been possible if I just used a website builder.
                            <br /> Take a look a the cool contact logos, or if you want an easter egg, <strong>hover your mouse over the glasses.</strong>
                            <br /> Right Now I am working on finishing all of freeCodeCamp's curriculum. <br />
                            In the proces, I will be elligible to apply for another Front-End Project with a non-profit organization of my choice, so look out for that soon!
                            <br /><br />Github for this website: <a className='project-url' href='https://github.com/salegrettm/my-website' rel="noreferrer" target='_blank'>Github</a>
                        </p>
                    </li>
                    <li className='portfolio-item'>
                        <h2 className='project-title'>Certifications</h2>
                        <ol className='certs'>
                            <li className='cert'><a href='https://www.freecodecamp.org/certification/salegrettm/responsive-web-design' rel="noreferrer" target='_blank'>Responsive Web Design</a>. (Completed 300hrs)</li>
                            <li className='cert'><a href='https://www.freecodecamp.org/certification/salegrettm/javascript-algorithms-and-data-structures' rel="noreferrer" target='_blank'>JavaScript Algorithms and Data Structures</a>. (Completed 300hrs)</li>
                            <li className='cert'>Front End Developer Certification (Expected Completion: May 2022 | 1200hrs)</li>
                            <li className='cert'>Back End Developer Certification (Expected Completion: August 2022 | 2400hrs)</li>
                            <li className='cert'>UNL Computer Science Degree (Expected Completion: December 2022)</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
