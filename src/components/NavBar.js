import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'

function Navbar(props) {

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

  const [show, setShow] = useState(false);
  const navControl = () => {
    if (window.scrollY < (window.screen.height - 150)) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', navControl);
    return () => window.removeEventListener('scroll', navControl);
  }, [])

  return (
    <nav className={show ? 'nav' : 'nav hide'}>
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
              duration={300 * (idx + 1)}
            >
              <button key={idx} className='nav-btn'>
                {btn.name}
              </button>
            </Link>
          );
        })
      }
    </nav>
  )
}

export default Navbar