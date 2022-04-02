import React, { useEffect } from 'react';
import Aos from 'aos';
import * as FaIcons from 'react-icons/fa';
import './Certifications.css'

function Certifications() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

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
      <h1 className='certifications-title' data-aos='fade-up'>Completed</h1>
      {
        certs.map((cert) => {
          return (
            <a
              className='certification'
              rel="noreferrer"
              target='_blank'
              href={cert.link}
              key={cert.name}
              data-aos='fade-up'
            >
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
            </a>
          );
        })
      }
      <h1 className='certifications-title' data-aos='fade-up'>Upcoming</h1>
      <div className='cert-upcoming-section' data-aos='fade-up'>
        <label className='cert-label'>
          Front End Developer (1200 hrs) - April 2022
        </label>
        <label className='cert-label'>
          Data Visualization (300 hrs) - May 2022
        </label>
        <label className='cert-label'>
          Back End Developer (1200 hrs) - August 2022
        </label>
        <label className='cert-label'>
          Full Stack Developer (2400 hrs) - August 2022
        </label>
        <label className='cert-label'>
          Bachelor of Science in Computer Science - December 2022
        </label>
      </div>
      <h1 className='certifications-title' data-aos='fade-up'>Info</h1>
      <div className='cert-info' data-aos='fade-up'>
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