import React, { useEffect, useState } from 'react';
import './NavBar.css'

function Navbar(props) {

  const buttons = [
    {
      name: 'About Me',
      ref: props.refs.aboutMe
    },
    {
      name: 'Portfolio',
      ref: props.refs.portfolio
    },
    {
      name: 'Certifications',
      ref: props.refs.certifications
    },
    {
      name: 'Contact',
      ref: props.refs.contact
    },
  ]

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

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
            <button key={idx} className='nav-btn' onClick={() => handleClick(btn.ref)}>
              {btn.name}
            </button>
          );
        })
      }
    </nav>
  )
}

export default Navbar