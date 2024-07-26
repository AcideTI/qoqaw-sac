import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "../pages/contacto";
import HomePage from "../pages/home";
import NosotrosPage from "../pages/nosotros";
import ProyectosPage from "../pages/proyectos";
import ServiciosPage from "../pages/servicios";
import CommunityManagerPage from "../pages/communitymanager";
import SocialMediaPage from "../pages/socialmedia";
import PosicionamientoSEOPage from "../pages/posicionamientoseo";
import GrowthHackingPage from "../pages/growthhacking";
import PublicidadDigitalPage from "../pages/publicidaddigital";
import BrandingDgitalPage from "../pages/brandingdigital";
import MaterialPublicitarioPage from "../pages/materialpublicitario";

const RoutesPages = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/servicios/communitymanager" element={<CommunityManagerPage />} />
        <Route path="/servicios/socialmedia" element={<SocialMediaPage />} />
        <Route path="/servicios/posicionamientoseo" element={<PosicionamientoSEOPage />} />
        <Route path="/servicios/growthhacking" element={<GrowthHackingPage />} />
        <Route path="/servicios/publicidaddigital" element={<PublicidadDigitalPage />} />
        <Route path="/servicios/branding" element={<BrandingDgitalPage />} />
        <Route path="/servicios/materialpublicitario" element={<MaterialPublicitarioPage />} />
      </Routes>
  );
};

export default RoutesPages;
