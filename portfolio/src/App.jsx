import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ProjetDetail from "./components/projetDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/projets/:id" element={<ProjetDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;