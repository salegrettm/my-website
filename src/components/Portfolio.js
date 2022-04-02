import React, { useEffect } from 'react';
import Aos from 'aos';
import * as FaIcons from 'react-icons/fa';
import './Portfolio.css'

function Portfolio() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const projects = [
    {
      title: 'Civic Nebraska PWA',
      technologies: 'React.js, Node.js, MongoDB, Auth0, Formik',
      company: 'Election Protection Program (Civic Nebraska)',
      description: 'The Civic Nebraska Election Protection App ' +
        ' serves as a way of helping poll observers manage poll locations. It was developed throughout the 21-22 UNL Capstone ' +
        'Project.' +
        ' The app was developed by a team of 6 students including myself, with the help of UNL staff as project management.',
      link: 'https://epp-server.herokuapp.com/',
      github: 'https://github.com/salegrettm/election-protection-program',
      images: ['images/civ-neb.png', 'images/civ-neb-mobile.png']
    },
    {
      title: 'Clientix PWA',
      technologies: 'React.js, Clientix PHP API, Netlify',
      company: 'ALeNet, Inc.',
      description: 'Clientix is ALeNet\'s CRM for financial services.' +
        ' The app showcases, in the form of a demo banking site, the functionality of the Clientix data API. It was developed throughout my time ' +
        'as an intern at ALeNet, Inc.' +
        ' The app was developed by myself, with the help of Clientix back-end engineers to develop and hook up the API.',
      link: 'https://clientix-portal-demo.netlify.app/',
      github: 'https://github.com/salegrettm/demo-portal',
      images: ['images/clientix-app.png', 'images/clientix-app-mobile.png']
    }
  ]

  return (
    <div className='portfolio-wrapper'>
      {
        projects.map((project) => {
          return (
            <div className='project' data-aos='fade-up' key={project.title}>
              <h2 className='project-title'>
                <a rel="noreferrer" target='_blank' href={project.link}>
                  {project.title}<FaIcons.FaLink className='project-link' />
                </a>
              </h2>
              <div className='project-images'>
                {
                  project.images.map((img, idx) => {
                    return <img src={img} key={idx} alt='project' className='project-image' />
                  })
                }
              </div>
              <label className='project-subheader'>
                <strong>Company: </strong><br />{project.company}
              </label>
              <label className='project-subheader'>
                <strong>Technologies: </strong><br />{project.technologies}
              </label>
              <label className='project-subheader'>
                <strong>Description:</strong>
              </label>
              <p className='project-description'>
                {project.description}
              </p>
              <a className='git-link' rel="noreferrer" target='_blank' href={project.link}><FaIcons.FaGithub /></a>
            </div>
          );
        })
      }
      <div className='project' data-aos='fade-up'>
        <h2 className='project-title'>Info and Upcoming</h2>
        <p className='paragraph'>
          This website was entirely developed in React.js. In here I showcase my front-end knowledge and design.
          Currently, I am working on finishing my degree and freeCodeCamp certifications.
          In a few months this will make me eligible to develop a charity project for a non-profit organization of my
          choice. Be on the look out for that!
        </p>
        <p className='paragraph'>
          Additionally, below you will find my completed freeCodeCamp certifications.
          I have linked to my freeCodeCamp profile, were you can see the curriculum and projects
          I have completed to earn them. Feel free to check them out on my CodePen linked below.
        </p>
      </div>
    </div>
  )
}

export default Portfolio