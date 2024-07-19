import React from "react";
import "./MisionVision.css";

const MisionVision = () => {
  return (
    <div className="misionvision-container">
        
      <div className="misionvision-column">
        <h1>Acerca de Nosotros</h1>
        <p>
          Transformamos ideas en resultados tangibles. Impulsamos tu presencia
          online.
        </p>
        <p>
          Somos una Institución que busca contribuir con capacitaciones y
          transferencia de conocimientos a los emprendedores y empresarios en el
          Sur del Perú involucrando a las entidades que contribuyen en la cadena
          de valor de los productores como las Asociaciones, Gremios, Ongs, el
          Estado, la Academia, entre otros.
        </p>
      </div>

      <div className="misionvision-column">
        <h2>Misión</h2>
        <p>
          Brindar soluciones de estrategias de marketing y publicidad a las
          MYPES para mejorar sus ventas y comercialización, a través del
          desarrollo y elaboración de productos y servicios acorde a las
          tendencias y comportamientos del mercado; generando así, mayores
          beneficios para nuestros clientes.
        </p>
        <h2>Visión</h2>
        <p>
          Al 2024 ser un CITE de Marketing y publicidad líder en procesos de
          venta y comercialización a nivel sur del país, generando mayor valor
          agregado a la cadena productiva de las MYPES, a través de la mejora la
          calidad de productos y el uso de tecnologías.
        </p>
      </div>
    </div>
  );
};

export default MisionVision;
