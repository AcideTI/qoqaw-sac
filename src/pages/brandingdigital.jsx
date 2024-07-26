import React from "react";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import branding from "../assets/brading-disenio/branding.webp";
import "../Components/SocialMedia/ServiciosIncluidosSocial.css";
import "../Components/GrowthHacking/GrowthHacking.css";

const contenido = {
  subtitle: "BRANDING",
  text: "Sabemos que en un mercado cada vez más competitivo, es fundamental diferenciarse y destacar entre la multitud. ¿Se ha preguntado alguna vez cómo su marca se percibe en comparación con sus competidores? ¿Está seguro de que está transmitiendo el mensaje correcto y conectando emocionalmente con su audiencia?",
  image: branding,
  items: [
    "Investigación de Marca",
    "Desarrollo de Estrategia de Marca",
    "Diseño de Identidad Visual y Mensajería de Marca",
    "Implentación de Marca",
    "Gestión de Marca en Redes",
    "Branding Digital",
    "Consultoría Continua",
  ],
};

const BrandingDgitalPage = () => {
  return (
    <div className="branding-digital-page-efecto">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        overlay={true}
        overlayHeading="NO ES LO QUE VENDES"
        overlaySubheading="¡ES LA FORMA EN QUE LO VENDES!"
      />
      <div className="branding-digital-page">
        <ServiciosIncluidosSocial items={contenido.items} columns={4} />
      </div>
    </div>
  );
};

export default BrandingDgitalPage;
