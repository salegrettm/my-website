import { React, useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/aboutme' className='navbar-title' onClick={closeMobileMenu}>
                        Sebastian Alegrett&nbsp;&nbsp;<IoIcons.IoMdGlasses className='glasses' />
                    </Link>
                    <div className='mobile-menu-icon' onClick={handleClick}>
                        {click ? <FaIcons.FaTimes className='quit'/> : <FaIcons.FaBars className='bars'/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link' onClick={closeMobileMenu}>
                                About me <FaIcons.FaInfo className='nav-icon'/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
                                Contact&nbsp;<IoIcons.IoMdContact className='nav-icon'/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link' onClick={closeMobileMenu}>
                                Portfolio&nbsp;<FaIcons.FaFolder className='nav-icon'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
