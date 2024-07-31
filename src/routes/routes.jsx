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
import DisenioPackagingPage from "../pages/diseniopackaging";
import PaginaWebPage from "../pages/paginaweb";
import TiendasVirtualesPage from "../pages/tiendasvirtuales";
import SoftwarePage from "../pages/software";
import ErpPage from "../pages/erp";
import ManualIdentidadPage from "../pages/manualidentidad";

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
        <Route path="/servicios/diseniopackaging" element={< DisenioPackagingPage/>} />
        <Route path="/servicios/paginaweb" element={<PaginaWebPage />} />
        <Route path="/servicios/tiendavirtual" element={<TiendasVirtualesPage />} />
        <Route path="/servicios/software" element={<SoftwarePage />} />
        <Route path="/servicios/erp" element={<ErpPage />} />
        <Route path="/servicios/manualidentidad" element={<ManualIdentidadPage/>}/>
      </Routes>
  );
};

export default RoutesPages;
