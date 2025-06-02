import { useState, useEffect } from "react";
import React from "react";
import About from "./about";
import Carrousel from "./carrousel";
import Skills from "./skills";
import data from "../data/projects.json";
import ContactForm from "./contact";
import "../styles/main.scss";
import { content } from '../../lang';

function Main({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container-main">
      <About text={content[language].about} />
      <Carrousel data={data} language={language} />
      <Skills text={content[language].competence}/>
      <ContactForm  text={content[language].contact}/>
      {isVisible && (
        <button
          id="backToTop"
          className="back-to-top"
          aria-label="Retour en haut"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </section>
  );
}

export default Main;
