import React from "react";
import tienda from "../assets/desarrollo-software/tienda.webp";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import "../Components/GrowthHacking/GrowthHacking.css";

const contenido = {
  subtitle: "TIENDAS VIRTUALES",
  text: "Tiendas virtuales, también conocido como plataforma de comercio electrónico, es una solución tecnológica que permite a los usuarios crear, personalizar y gestionar tiendas en línea para vender productos y servicios a través de internet. <br /> <br />Imaginen tener una tienda abierta las 24 horas, los 7 días de la semana, sin límites geográficos, accesible desde cualquier dispositivo conectado a internet. Eso es exactamente lo que ofrecemos con nuestras tiendas virtuales.",
  image: tienda,
  
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
const TiendasVirtualesPage = () => {
  return (
    <div className="pagina-web-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        showOverlayVideoBinario={true} // Pasar el prop para mostrar el video superpuesto
        imagePosition="left"
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={4} />
    </div>
  );
};

export default TiendasVirtualesPage;
