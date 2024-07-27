import React from "react";
import erp from "../assets/erp/erp.webp";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import "../Components/GrowthHacking/GrowthHacking.css";

const contenido = {
  subtitle: "Enterprise Resource Planning",
  text: "Una solución integral diseñada para llevar la gestión de tu empresa al siguiente nivel. En un mundo empresarial cada vez más competitivo y dinámico, contar con un sistema ERP es fundamental para optimizar tus operaciones y alcanzar tus objetivos de crecimiento.<br /> <br />Nuestro ERP te ofrece una plataforma robusta y flexible que se adapta a las necesidades específicas de tu negocio, permitiéndote integrar y automatizar procesos clave como la gestión financiera, la cadena de suministro, la producción y las relaciones con los clientes.",
  image: erp,

  items: [
    "Integración de procesos",
    "Automatización de tareas",
    "Toma de decisoines basada en datos",
    "Mejora de la visibilidad",
    "Optimización de recursos",
  ],
};

const ErpPage = () => {
  return (
    <div className="pagina-web-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        showOverlayVideoCode={true} // Pasar el prop para mostrar el video superpuesto
        imagePosition="left"
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={5} />
    </div>
  );
};

export default ErpPage;
