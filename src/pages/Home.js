import React, { useRef } from 'react';
import AboutMe from '../components/AboutMe';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import NavBar from '../components/NavBar';
import './Home.css';

function Home() {

  const top = useRef();
  const aboutMe = useRef();
  const portfolio = useRef();
  const contact = useRef();
  const certifications = useRef();

  const refs = {
    aboutMe: aboutMe,
    portfolio: portfolio,
    contact: contact,
    certifications: certifications
  }

  return (
    <div className='home-wrapper' ref={top}>
      <NavBar refs={refs} />
      <section className='welcome-section'>
        <Welcome refs={refs} />
      </section>
      <h1 className="glitch sub-title" ref={aboutMe}>About Me:</h1>
      <section className='about-me-section'>
        <AboutMe />
      </section>
      <section className='contact-section'>
        <h1 className="glitch sub-title" ref={contact}>Contact:</h1>
        <Contact />
      </section>
      <h1 className="glitch sub-title" ref={portfolio}>Portfolio:</h1>
      <section className='portfolio-section'>
        <Portfolio />
      </section>
      <h1 className="glitch sub-title" ref={certifications}>Certifications:</h1>
      <section className='certifications-section'>
        <Certifications />
      </section>
    </div>
  )
}

export default Home