import React from 'react';
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='about-me-wrapper'>
      <div className='top-sec'>
        <img className='headshot' src='images/my-picture.jpg' alt='professional headshot of myself' />
        <ul className='about-me-list'>
          <h3 className='about-title'>Quick Read</h3>
          <li className='about-element'>
            <strong>Position:</strong> Software Developer
          </li>
          <li className='about-element'>
            <strong>Experience:</strong> 3+ years
          </li>
          <li className='about-element'>
            <strong>Studies: </strong>
            <a
              rel="noreferrer"
              className='link'
              target='_blank'
              href='https://computing.unl.edu/'>
              UNL School of Computing
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
      </div>
      <div className='intro'>
        <h3 className='about-title'>Introduction</h3>
        <p>
          Professional software developer in React.js/React Native, Node, Golang. 
          University of Nebraska-Lincoln Computer Science Graduate (B.S in Computer Science).
        </p>
      </div>
    </div>
  )
}

export default AboutMe