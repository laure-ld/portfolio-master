import  { Link, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/header.scss';


function Header () {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    function handleOnClick() {
        setIsOpen(!isOpen);
    }
    const showMenu = location.pathname === "/main";

    return (
        <section className="container">
            <Link to="/main">
                <img src="/images/logo.png" alt="logo" className="logo cursor-pointer"/>
            </Link>
            {showMenu && (
                <button aria-expanded={isOpen} aria-controls="menu" onClick={handleOnClick} className="burger-btn">
                        <svg  className='line' stroke="black" fill="none" strokeLinecap="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4" y1="12" x2="25" y2="12" strokeWidth="2"/>
                            <line x1="4" y1="6" x2="25" y2="6" strokeWidth="2"/>
                            <line x1="4" y1="18" x2="25" y2="18" strokeWidth="2"/>
                        </svg>
                </button>
            )}
            <nav id="menu" className={`menu ${isOpen ? 'open' : ''}`} onClick={handleOnClick} alt="menu deroulant">
                <ul>
                    <li><a href="#projets">Projets</a></li>
                    <li><a href="#competence">Compétences</a></li>
                    <li><a href="#soft">Soft skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#rs">Réseaux</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header; 