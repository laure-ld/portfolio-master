import  { Link, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/header.scss';


function Header ({text, language, setLanguage}) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    function handleOnClick() {
        setIsOpen(!isOpen);
    }
    const showMenu = location.pathname === "/" || location.pathname === "/main";

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "fr" ? "en" : "fr"));
      };    


      console.log("language:", language);
      console.log("text.projet:", text.projet);
    return (
        <section className="container">
            <div className='logo-lang-container'>
            <Link to="/main">
                <img src="/images/logo.webp" alt="logo" className="logo cursor-pointer"/>
            </Link>
            <button onClick={toggleLanguage} className="switch" aria-label={language === "fr" ? "Switch to English" : "Passer en français"}>
                    {language === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
            </button>
            </div>
            {showMenu && (
                <button aria-expanded={isOpen} aria-controls="menu" aria-label="Bouton du menu" onClick={handleOnClick} className="burger-btn">
                        <svg  className='line' stroke="black" fill="none" strokeLinecap="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4" y1="12" x2="25" y2="12" strokeWidth="2"/>
                            <line x1="4" y1="6" x2="25" y2="6" strokeWidth="2"/>
                            <line x1="4" y1="18" x2="25" y2="18" strokeWidth="2"/>
                        </svg>
                </button>
            )}
            {showMenu && (
            <nav id="menu" className={`menu ${isOpen ? 'open' : ''}`} onClick={handleOnClick} aria-hidden={!isOpen} role="navigation">
                <ul>
                    <li><a href="#carrousel">{text.projet}</a></li>
                    <li><a href="#competence">{text.skills}</a></li>
                    <li><a href="#soft">{text.soft}</a></li>
                    <li><a href="#contact">{text.contact}</a></li>
                    <li><a href="#rs">{text.rs}</a></li>
                </ul>
            </nav>
            )}
        </section>
    )
}

export default Header; 