import React from 'react';
import { Link } from 'react-scroll';
import './Welcome.css';

function Welcome(props) {

  const buttons = [
    {
      name: 'About Me',
      ref: props.ids.aboutMe
    },
    {
      name: 'Portfolio',
      ref: props.ids.portfolio
    },
    {
      name: 'Certifications',
      ref: props.ids.certifications
    },
    {
      name: 'Contact',
      ref: props.ids.contact
    },
  ]

  return (
    <div className='welcome-wrapper'>
      <h1 className="glitch title">
        Sebastian <br /> Alegrett
      </h1>
      <div className='initial-navigation'>
        {
          buttons.map((btn, idx) => {
            return (
              <Link
                key={idx}
                activeClass='active'
                to={btn.ref}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000 * (idx + 1)}
              >
                <button key={idx} className='init-nav-btn'>
                  {btn.name}
                </button>
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}

export default Welcome