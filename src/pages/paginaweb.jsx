import React from "react";
import web from "../assets/desarrollo-software/web.webp";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import "../Components/GrowthHacking/GrowthHacking.css"; 

const contenido = {
  subtitle: "PÁGINAS WEB",
  text: "Imagina tener una plataforma en Internet que refleje la esencia de tu marca, atraiga la atención de tus clientes ideales y te ayude a destacarte entre la competencia. Con nuestro equipo de expertos en diseño y desarrollo web, podemos convertir esa visión en una realidad tangible. <br /> <br />Nuestro enfoque va más allá de simplemente crear un sitio web. Nos esforzamos por entender tus necesidades comerciales y tus objetivos específicos. A partir de ahí, diseñamos y desarrollamos una página web que no solo sea atractiva visualmente, sino que también esté optimizada para la funcionalidad, la usabilidad y el rendimiento.",
  image: web,
  items: [
    "Diseño personalizado",
    "Gestión de productos",
    "Procesamiento de pagos",
    "Seguridad",
    "Gestión de pedidos",
    "Análisis y estadísticas",
    "Optimización para dispositivos móviles",
  ],
};

const PaginaWebPage = () => {
  return (
    <div className="pagina-web-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        showOverlayVideoBinario={true} // Pasar el prop para mostrar el video superpuesto
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={4} />
    </div>
  );
};

export default PaginaWebPage;