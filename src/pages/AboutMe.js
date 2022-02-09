import React from 'react'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='aboutme-container'>
                <h1 className='aboutme-title'>About Me:</h1>
                <img className='headshot' alt='me in spain' src='images/my-picture.JPG'></img>
                <p className='aboutme-section'>
                    Hello! Welcome to my page. My name is Sebastian Alegrett. I am from Caracas, Venezuela, but I have lived most of my life 
                    between Mexico City and Nebraska in the U.S.A. I speak three Languages: (Spanish, English, French).<br/><br/>
                    I am currently studying <a href='https://cse.unl.edu/home' rel="noreferrer" target='_blank'>Computer Science at the University of Nebraska-Lincoln</a>.
                    I am very interested in all things C.S, from front-end to back-end, to systems engineering. My goal is to obtain a masters in Machine Learning and Data Science. <br/><br/>
                    At the moment, I am focusing on learning as much as I can, completing my major, obtaining certifications from <a href='https://www.freecodecamp.org/' rel="noreferrer" target='_blank'>freeCodeCamp</a> and
                    developing as many projects as I can get my hands on. <br/><br/>
                    My specialties are: JavaScript (React.js, Angular.js, etc...), Python, C, and Java, but I love learning new tools and frameworks, so a challenge is always welcome.<br/><br/>
                    I have worked as a software developer for <a href='http://www.alenet.com/index.php/en/' rel="noreferrer" target='_blank'>ALeNet, Inc.</a> throughout two semesters. 
                    There I have worked primarily on showcasing <a href='http://www.alenet.com/index.php/en/our-products/clientix-crm' rel="noreferrer" target='_blank'>Clientix, CRM's</a> API and webservice functionality,
                    through demo banking websites and mobile apps. Before this, I worked on individual projects through Fiverr. However, I am always looking for new projects and things to keep me occupied: check out my <a href='/portfolio'>portfolio</a>.

                </p>
            </div>
        </div>
    )
}

export default AboutMe
