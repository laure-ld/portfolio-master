import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ProjetDetail from "./components/projetDetail";
import { useState } from "react";
import { content } from '../lang';

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} text={content[language].header}/>
      <Routes >
        <Route path="/" element={<Main language={language} />} />
        <Route path="/main" element={<Main language={language} />} />
        <Route path="/projets/:id" element={<ProjetDetail setLanguage={setLanguage} language={language} text={content[language].projetdetail}/>} />
      </Routes>
      <Footer setLanguage={setLanguage} language={language} text={content[language].footer_text}/>
    </>
  );
}

export default App;
