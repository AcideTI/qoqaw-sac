import React from "react";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import identidad from "../assets/manualidentidad/identidad.webp";
import "../Components/SocialMedia/ServiciosIncluidosSocial.css";
import "../Components/GrowthHacking/GrowthHacking.css";

const contenido = {
  subtitle: "MANUAL DE IDENTIDAD",
  text: "Desarrollamos marcas o identidad corporativa con un alto profesionalismo que trascienden y que conectan con el mundo digital, inyectando valor las marcas y consiguiendo los mejores resultados y relevancia que se necesita. <br /> <br />El desarrollo de identidad corporativa o desarrollo de marcas destacan por lograr una identidad visual potente, única, diferencial y coherente alineados a los valores corporativos de nuestros clientes, concebimos el branding como un universo de estrategia, diseño y creatividad sin límites.",
  image: identidad,
  items: [
    "Desarrollo de la identidad corporativa",
    "Desarrollo de marca",
    "Análisis inicial (entrevistas personas clave, propuestas de valor, fortalezas y debilidad de marca)",
    "Naming",
    "Definicion de marca",
    "Diseño de logotipos",
    "Papelería corporativa, Packing o merchandising",
  ],
};

const ManualIdentidadPage = () => {
  return (
    <div>
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
      />
      <div>
        <ServiciosIncluidosSocial items={contenido.items} columns={4} />
      </div>
    </div>
  );
};

export default ManualIdentidadPage;
