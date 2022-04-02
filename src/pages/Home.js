import React, { useRef } from 'react';
import AboutMe from '../components/AboutMe';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import NavBar from '../components/NavBar';
import './Home.css';
import ContactForm from '../components/ContactForm';

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
      <div className='ref' ref={aboutMe} />
      <h1 className="glitch sub-title">About Me:</h1>
      <section className='about-me-section'>
        <AboutMe />
      </section>
      <div className='ref' ref={portfolio} />
      <h1 className="glitch sub-title" >Portfolio:</h1>
      <section className='portfolio-section'>
        <Portfolio />
      </section>
      <div className='ref' ref={certifications} />
      <h1 className="glitch sub-title">Certifications:</h1>
      <section className='certifications-section'>
        <Certifications />
      </section>
      <section className='contact-section'>
        <div className='ref' ref={contact} />
        <h1 className="glitch sub-title">Contact:</h1>
        <Contact />
        <ContactForm />
      </section>
    </div>
  )
}

export default Home