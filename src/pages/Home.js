import React, { useRef } from 'react';
import AboutMe from '../components/AboutMe';
import Welcome from '../components/Welcome';
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
      <section className='welcome-section'>
        <Welcome refs={refs} />
      </section>
      <h1 className="glitch sub-title" ref={aboutMe}>About Me:</h1>
      <section className='about-me-section'>
        <AboutMe />
      </section>
    </div>
  )
}

export default Home