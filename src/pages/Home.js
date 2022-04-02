import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import AboutMe from '../components/AboutMe';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import './Home.css';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

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
      <section className='welcome-section' data-aos='fade-up'>
        <Welcome refs={refs} />
      </section>
      <div className='ref' ref={aboutMe} />
      <h1 className="glitch sub-title" data-aos='fade-up'>About Me:</h1>
      <section className='about-me-section' data-aos='fade-up'>
        <AboutMe />
      </section>
      <div className='ref' ref={portfolio} />
      <h1 className="glitch sub-title" data-aos='fade-up'>Portfolio:</h1>
      <section className='portfolio-section'>
        <Portfolio />
      </section>
      <div className='ref' ref={certifications} />
      <h1 className="glitch sub-title" data-aos='fade-up'>Certifications:</h1>
      <section className='certifications-section'>
        <Certifications />
      </section>
      <div className='ref' ref={contact} />
      <h1 className="glitch sub-title">Contact:</h1>
      <section className='contact-section'>
        <Contact />
        <ContactForm />
      </section>
    </div>
  )
}

export default Home