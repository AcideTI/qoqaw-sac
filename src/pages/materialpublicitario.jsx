import React from "react";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import material from "../assets/materialpublicitario/materialpublicitario.webp";
import "../Components/GrowthHacking/GrowthHacking.css";
const contenido = {
    subtitle: "DISEÑO DE MATERIAL PUBLICITARIO",
    text: "El material publicitario brindara la posibilidad de consolidar vínculos con el público objetivo, dando a conocer los productos o servicios que se brindan, logrando que se sientan comprometidos con la empresa y orgullosos de utilizar la marca, logrando así publicidad cercana y útil.",
    image: material,
  };

const MaterialPublicitarioPage = () => {
  return (
    <div className="material-publictario-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
      />
    </div>
  );
};

export default MaterialPublicitarioPage;
