import React, { useEffect } from 'react'
import Aos from 'aos';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './Contact.css'

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className='contact' data-aos='fade-up'>
            <div className='contact-container'>
                <ul className='contact-icons'>
                    <li className='contact-icon'>
                        <a href='https://www.facebook.com/sebastian.alegrettmorreo/' rel="noreferrer" target='_blank' className='contact-link'>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'><FaIcons.FaFacebook className='facebook-icon' /></span>
                        </a>
                    </li>
                    <li className='contact-icon'>
                        <a href='https://www.linkedin.com/in/sebastianalegrett/' rel="noreferrer" target='_blank' className='contact-link'>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'><FaIcons.FaLinkedin className='linkedin-icon' /></span>
                        </a>
                    </li>
                    <li className='contact-icon'>
                        <a href='https://www.instagram.com/sebastianalegrett/' rel="noreferrer" target='_blank' className='contact-link'>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'><FaIcons.FaInstagram className='instagram-icon' /></span>
                        </a>
                    </li>
                    <li className='contact-icon'>
                        <a href='mailto:salegrett-morreo@huskers.unl.edu' rel="noreferrer" target='_blank' className='contact-link'>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'><AiIcons.AiOutlineMail className='email-icon' /></span>
                        </a>
                    </li>
                    <li className='contact-icon'>
                        <a href='https://wa.me/+14022178764' rel="noreferrer" target='_blank' className='contact-link'>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'></span>
                            <span className='side'><FaIcons.FaWhatsapp className='whats-icon' /></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
