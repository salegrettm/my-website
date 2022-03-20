import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './Certifications.css'

function Certifications() {

  const certs = [
    {
      name: 'Responsive Web Design',
      time: '300 Hours',
      icon: <FaIcons.FaFreeCodeCamp className='cert-icon' />,
      organization: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/salegrettm/responsive-web-design'
    },
    {
      name: 'Data Structures and Algorithms',
      time: '300 Hours',
      icon: <FaIcons.FaFreeCodeCamp className='cert-icon' />,
      organization: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/salegrettm/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Front End Development Libraries',
      time: '300 Hours',
      icon: <FaIcons.FaFreeCodeCamp className='cert-icon' />,
      organization: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/salegrettm/front-end-development-libraries'
    }
  ]


  return (
    <div className='certifications-wrapper'>
      <h1 className='certifications-title'>Completed</h1>
      <div className='completed-section'>
        {
          certs.map((cert) => {
            return (
              <div className='certification' key={cert.name}>
                <h2 className='cert-title'>{cert.name}</h2>
                {cert.icon}
                <label className='cert-label'>
                  <strong>Issuing Organization: </strong>
                  {' ' + cert.organization}
                </label>
                <label className='cert-label'>
                  <strong>Time to Complete: </strong>
                  ~{cert.time}
                </label>
                <label className='cert-label'>
                  <strong>Link: </strong>
                  <a
                    className='cert-link'
                    rel="noreferrer"
                    target='_blank'
                    href={cert.link}
                  >
                    <FaIcons.FaLink />
                  </a>
                </label>
              </div>
            );
          })
        }
      </div>
      <h1 className='certifications-title'>Upcoming</h1>
      <div className='cert-upcoming-section'>
        <label className='cert-label'>
          <strong>Certification: </strong>
          Front End Developer (1200 hrs) - April 2022
        </label>
        <label className='cert-label'>
          <strong>Certification: </strong>
          Data Visualization (300 hrs) - May 2022
        </label>
        <label className='cert-label'>
          <strong>Certification: </strong>
          Back End Developer (1200 hrs) - August 2022
        </label>
        <label className='cert-label'>
          <strong>Certification: </strong>
          Full Stack Developer (2400 hrs) - August 2022
        </label>
        <label className='cert-label'>
          <strong>Certification: </strong>
          Bachelor of Science in Computer Science - December 2022
        </label>
      </div>
      <h1 className='certifications-title'>Info</h1>
      <div className='cert-info'>
        <p className='cert-paragraph'>
          All of these certifications are completed through freeCodeCamp with the exception of my degree.
          Click <a className='cert-link' rel="noreferrer" target='_blank' href='https://www.freecodecamp.org/salegrettm'>here</a> 
          &nbsp; to view my freeCodeCamp profile and look at the curriculum I had to go through to obtain them.
        </p>
        <p className='cert-paragraph'>
          Additionally, go checkout my codePen to see the small projects I worked on to complete the certifications.
          Click <a className='cert-link' rel="noreferrer" target='_blank' href='https://www.freecodecamp.org/salegrettm'>here</a> 
          &nbsp; to view my codePen profile and look at the projects I had to complete.
        </p>
      </div>
    </div>
  )
}

export default Certifications