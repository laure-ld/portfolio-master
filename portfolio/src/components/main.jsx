import { useState, useEffect } from "react";
import React from "react";
import About from "./about";
import Carrousel from "./projects";
import Skills from "./skills";
import data from "../data-projects.json";
import ContactForm from "./contact";

function Main() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return( 
        <section className="contenair-main">
            <About />
            <Carrousel data={data}/>
            <Skills />
            <ContactForm />
            {isVisible && (
                <button id="backToTop" className="back-to-top" aria-label="Retour en haut" onClick={scrollToTop}>
                &#8593;
                </button>
            )}
        </section>
    )
}

export default Main;