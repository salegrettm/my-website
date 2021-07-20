import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <section className='footer-prompt'>
                    <p className='footer-prompt-text'>
                        if(SebastianAlegrett.qualifications &gt;= expectedQualifications) &#123;<br />
                        <a href='https://www.linkedin.com/in/sebastianalegrett/' className='hire-button'><button type='button' className='hire'>hire(SebastianAlegrett);</button></a> <br />
                        &#125; else &#123; <br/>
                        <span>return</span> <FaIcons.FaRegSadTear className='sad-face'/><br />
                        &#125;
                    </p>
                </section>
                <section className='footer-credits'>
                <span className='social'>
                <a href='https://www.facebook.com/sebastian.alegrettmorreo/' rel="noreferrer" target='_blank'><FaIcons.FaFacebook/></a>
                <a href='https://wa.me/+14022178764' rel="noreferrer" target='_blank'><FaIcons.FaWhatsapp/></a>
                <a href='https://www.linkedin.com/in/sebastianalegrett/' rel="noreferrer" target='_blank'><FaIcons.FaLinkedin/></a>
                <a href='https://github.com/salegrettm' rel="noreferrer" target='_blank'><FaIcons.FaGithub/></a>
                <a href='https://www.instagram.com/sebastianalegrett/' rel="noreferrer" target='_blank'><FaIcons.FaInstagram/></a>
                </span>
                </section>
            </div>
            <small className='website-rights'> Sebastian Alegrett &copy;</small>
        </div>
    )
}

export default Footer
