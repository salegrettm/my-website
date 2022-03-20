import React from 'react';
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='about-me-wrapper'>
      <ul className='about-me-list'>
        <h3 className='about-title'>QUICK READ</h3>
        <li className='about-element'>
          <strong>Position:</strong> Software Developer
        </li>
        <li className='about-element'>
          <strong>Experience:</strong> 2+ years
        </li>
        <li className='about-element'>
          <strong>Studies: </strong>
          <a
            rel="noreferrer"
            className='link'
            target='_blank'
            href='https://computing.unl.edu/'>
            University of Nebraska-Lincoln School of Computing
          </a>
        </li>
        <li className='about-element'>
          <strong>Major:</strong> Bachelor of Science in Computer Science
        </li>
        <li className='about-element'>
          <strong>Minor:</strong> Mathematics
        </li>
        <li className='about-element'>
          <strong>Graduation:</strong> December 2022
        </li>
        <li className='about-element'>
          <strong>Computer Science GPA:</strong> 3.75
        </li>
      </ul>
      <div className='intro'>
        <h3 className='about-title'>INTRODUCTION</h3>
        <p>
          Professional software developer, currently a senior computer science student
          at the University of Nebraska-Lincoln. I am dedicated to my craft, I love programming
          everything from client to server side. Whether it is styling with CSS, 
          coding responsive components for your front-end, hooking up an API to your app,
          or checking the quality of your back-end code, you can count on me.
        </p>
      </div>
    </div>
  )
}

export default AboutMe