import React from 'react';
import './Welcome.css';

function Welcome(props) {

  const buttons = [
    {
      name: 'About Me',
      ref: props.refs.aboutMe
    },
    {
      name: 'Contact',
      ref: props.refs.contact
    },
    {
      name: 'Portfolio',
      ref: props.refs.portfolio
    },
    {
      name: 'Certifications',
      ref: props.refs.certifications
    }
  ]

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='welcome-wrapper'>
      <h1 className="glitch title">
        Sebastian <br/> Alegrett
      </h1>
      <div className='initial-navigation'>
        {
          buttons.map((btn, idx) => {
            return (
              <button key={idx} className='init-nav-btn' onClick={() => handleClick(btn.ref)}>
                {btn.name}
              </button>
            );
          })
        }
      </div>
    </div>
  )
}

export default Welcome