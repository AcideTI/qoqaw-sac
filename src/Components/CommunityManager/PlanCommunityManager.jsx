import "./PlanCommunityManager.css";
import plan1 from "../../assets/community-manager/plan1.webp";
import plan2 from "../../assets/community-manager/plan2.webp";
import plan3 from "../../assets/community-manager/plan3.webp";
import plan4 from "../../assets/community-manager/plan4.webp";

const PlanCommunityManager = () => {
  const images = [
    {
      src: plan1,
      alt: "Imagen 1",
      backContent: (
        <>
          <h2>PACK SOLO ADS</h2>
          <h3>Gestión de Campañas en Redes Sociales</h3>
          <p>
            Plan para emprendimientos o negocios que requieren de campañas en
            redes sociales para aumentar sus ventas.
          </p>
          <ul>
            <li>
              Creación e implementación de una campaña de acuerdo al objetivo
              del negocio.
            </li>
            <li>Configuración de respuestas automáticas.</li>
            <li>Informe de resultados por campaña.</li>
          </ul>
        </>
      ),
    },
    {
      src: plan2,
      alt: "Imagen 2",
      backContent: (
        <>
          <h2>PLAN EMPRENDE</h2>
          <h3>Gestión de Contenido Redes Sociales</h3>
          <p>
            Plan para emprendimientos o negocios que recién empiezan y desean
            contenido profesional y aumentar su presencia y posicionamiento en
            redes sociales. Trabajo realizado en base a 02 redes sociales
            (Facebook e Instagram)
          </p>
          <ul>
            <li>Estrategias semanales / quincenales.</li>
            <li>Creación de hasta 03 Campañas en Facebook Ads.</li>
            <li>Informe de resultados por campaña.</li>
          </ul>
        </>
      ),
    },
    {
      src: plan3,
      alt: "Imagen 3",
      backContent: (
        <>
          <h2>PLAN MYPE</h2>
          <h3>Gestión de Contenido redes sociales + FACEBOOK ADS</h3>
          <p>
            Plan para emprendimientos o negocios que desean contenido
            profesional y aumentar su presencia y posicionamiento en redes
            sociales, así como aumentar sus ventas de forma inmediata. Trabajo
            realizado en base a 02 redes sociales (Facebook e Instagram)
          </p>
          <ul>
            <li>Estrategias semanales / quincenales.</li>
            <li>Respuesta automática a mensajes.</li>
            <li>Creación de hasta 03 Campañas en Facebook Ads.</li>
            <li>Segmentaciones.</li>
            <li>Informe de resultados por campaña.</li>
            <li>Asesoría constante.</li>
          </ul>
        </>
      ),
    },
    {
      src: plan4,
      alt: "Imagen 4",
      backContent: (
        <>
          <h2>PLAN CORPORATIVO</h2>
          <h3>Gestión de Contenido redes sociales + FACEBOOK ADS</h3>
          <p>
            Plan FULL para negocios desean contenido profesional y aumentar su
            presencia y posicionamiento en las redes sociales más usadas, así
            como aumentar sus ventas de forma inmediata. Trabajo realizado en
            base a 04 redes sociales (Facebook / Instagram /Linkedin)
          </p>
          <ul>
            <li>Estrategias semanales / quincenales.</li>
            <li>Respuesta automática a mensajes.</li>
            <li>Creación de hasta 03 Campañas en Facebook Ads.</li>
            <li>Segmentaciones.</li>
            <li>Informe de resultados por campaña.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="plan-community-wrapper">
      <div className="plan-community-grid">
        {images.map((image, index) => (
          <div className="plan-community-card" key={index}>
            <div className="plan-community-card-inner">
              <div className="plan-community-card-front">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="plan-community-card-back">
                <div className="plan-community-back-content">
                  {image.backContent}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCommunityManager;
