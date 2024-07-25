import React from "react";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import publicity from "../assets/marketing-digital/publicity.webp";

const contenido = {
  subtitle: "Publicidad Digital",
  text: "En el  mundo de los negocios digitales, la visibilidad es clave, y eso es exactamente lo que ofrece nuestro servicio de publicidad digital: la oportunidad de destacarse, conectarse y prosperar en el vasto paisaje digital. Vivimos en una era donde la presencia en línea es clave para el éxito comercial, y es aquí donde entra en juego nuestra oferta de publicidad digital.",
  image: publicity,
  items: [
    "Alcance Global",
    "Anuncios de búsqueda ",
    "Publicidad de video",
    "Adaptabilidad constante",
    "Segmentación Precisa",
    "Creatividad y Estrategia",
  ],
};
const PublicidadDigitalPage = () => {
  return (
    <div>
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={6} />
    </div>
  );
};

export default PublicidadDigitalPage;
