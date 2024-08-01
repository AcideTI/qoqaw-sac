import React from "react";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import disenioux from "../assets/diseniouxui/disenioux.webp";
import disenioui from "../assets/diseniouxui/disenioui.webp";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";

const contenido = {
  subtitle: "DISEÑO UX/UI",
  text: "El diseño UX/UI combina la experiencia de usuario (UX) y la interfaz de usuario (UI) para crear productos digitales que no solo son visualmente atractivos, sino también increíblemente intuitivos y fáciles de usar. Este enfoque se centra en diseñar interacciones que fluyan de manera natural, garantizando que esté pensado para mejorar la experiencia del usuario. <br /> <br />En esencia, el diseño UX/UI busca hacer que la tecnología no solo funcione bien, sino que también resulte agradable y eficiente para quienes la utilizan.",
  image: disenioux,

  items: [
    "Investigación del perfil de usuario",
    "Desarrollo del mapa de navegación, animación y transiciones",
    "Diseño de diagramas de navegación simulando interacciones",
  ],
};

const DisenioUXUIPage = () => {
  return (
    <div className="disenio-ux-ui-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        uiImage={disenioui}
        switchAvailable={true}
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={3} />
    </div>
  );
};

export default DisenioUXUIPage;