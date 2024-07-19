import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "../pages/contacto";
import HomePage from "../pages/home";
import NosotrosPage from "../pages/nosotros";
import ProyectosPage from "../pages/proyectos";

const RoutesPages = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
  );
};

export default RoutesPages;
