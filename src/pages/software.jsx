import React from "react";
import software from "../assets/desarrollo-software/software.webp";
import GrowthHacking from "../Components/GrowthHacking/GrowthHacking";
import ServiciosIncluidosSocial from "../Components/SocialMedia/ServiciosIncluidosSocial";
import "../Components/GrowthHacking/GrowthHacking.css";

const contenido = {
  subtitle: "SOFTWARE A MEDIDA",
  text: "Imagina por un momento tener un software diseñado exclusivamente para cubrir tus procesos comerciales, desde la gestión de clientes hasta la logística, pasando por la analítica de datos.  <br /> <br />Con nuestro servicio de software a medida, puedes dejar de preocuparte por adaptar tus procesos a una solución estándar, ¡Porque ahora la solución se adapta a ti!",
  image: software,

  items: [
    "Personalización",
    "Escalabilidad",
    "Control total",
    "Costos y tiempo",
    "Mantenimiento y soporte",
    "Seguridad",
  ],
};

const SoftwarePage = () => {
  return (
    <div className="pagina-web-page">
      <GrowthHacking
        subtitle={contenido.subtitle}
        heading={contenido.heading}
        text={contenido.text}
        image={contenido.image}
        showOverlayVideoCode={true} // Pasar el prop para mostrar el video superpuesto
      />
      <ServiciosIncluidosSocial items={contenido.items} columns={6} />
    </div>
  );
};

export default SoftwarePage;
