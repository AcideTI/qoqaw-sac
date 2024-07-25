import React from "react";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import growth from "../assets/marketing-digital/growth.webp";

const contenido = {
  subtitle: "Growth Hacking",
  heading: '"Desafía lo convencional, crece exponencialmente."',
  text: "Estrategia de marketing que se centra en el crecimiento rápido y eficiente de una empresa o producto. Combina técnicas de marketing, análisis de datos, desarrollo de productos y creatividad para identificar oportunidades y ejecutar tácticas que impulsen el crecimiento de manera significativa.",
  image: growth,
  items: [
    "Análisis de datos y métricas",
    "Optimización",
    "Desarrollo de estrategias",
    "Marketing de contenidos",
    "Automatización",
    "Estrategias de referral y afiliación",
    "Análisis de productos y retroalimentación de usuarios",
    "Gestión de producto",
  ],
};

const GrowthHackingPage = () => {
  return (
    <div>
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={4} />
    </div>
  );
};

export default GrowthHackingPage;
