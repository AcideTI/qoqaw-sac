import ClientesCarousel from "../Components/Clientes/ClientesCarousel";
import ContactoInicio from "../Components/ContactoInicio/ContactoInicio";
import Inicio from "../Components/Inicio/Inicio";
import MarketingDigital from "../Components/MarketingDigital/MarketingDigital";
import Programs from "../Components/Programs/Programs";

const HomePage = () => {
  return (
    <div >
      <Inicio />
      <MarketingDigital />
      <Programs />
      <ClientesCarousel />
      <ContactoInicio />  
    </div>
  );
};

export default HomePage;
