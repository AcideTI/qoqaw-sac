import React, { useState } from "react";
import "./MaterialPublicitario.css";
import banner from "../../assets/materialpublicitario/banner.webp";
import flyer from "../../assets/materialpublicitario/flyer.webp";
import merchandising  from "../../assets/materialpublicitario/merchandising.webp";
import papeleria from "../../assets/materialpublicitario/papeleria.webp";

const MaterialPublicitario = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Nueva variable de estado para la dirección

  const cards1 = [
    {
      title: "TIPOS",
      content: [banner, flyer, merchandising, papeleria]
    },
    {
      title: "CARACTERISTICAS",
      content: [
        "Banner (2m de alto x 1m de ancho – medida preferencial) – se adecua con características del cliente.",
        "Flyer publicitario (1080px X 1080px/6.35cm X 11.29cm) – A5 – (1080px X 1920px/9.14cm X 16.26cm)",
        "Merchandising (tazas, banderines, bolsas, llaveros, lapiceros, cuadernillos)",
        "Branding (papelería corporativa)"
      ]
    }
  ];

  const cards2 = [
    {
      title: "REQUERIMIENTOS",
      content: [
        "Se requiere el logo en versión editable.",
        "Descripción o información a mostrar.",
        "Datos de contacto de la empresa."
      ]
    },
    {
      title: "ADICIONAL",
      content: [
        "Si el servicio requiere impresión se puede brindar una propuesta de costos lo cual tiene un costo adicional, de acuerdo a lo que se converse."
      ]
    }
  ];

  const groups = [
    [...cards1],
    [...cards2]
  ];

  const handleNext = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
      setDirection("");
    }, 200); // Duración de la transición
  };

  const handleBack = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + groups.length) % groups.length);
      setDirection("");
    }, 200); // Duración de la transición
  };

  return (
    <div className="material-publicitario-content">
      <i className="fa-solid fa-arrow-right next-btn" onClick={handleNext}></i>
      <i className="fa-solid fa-arrow-left back-btn" onClick={handleBack}></i>
      <div className="material-publicitario-slider-container">
        <div
          className={`material-publicitario-slider ${direction}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groups.map((group, groupIndex) => (
            <div className="cards-group" key={groupIndex}>
              {group.map((card, index) => (
                <div className="card-comercial" key={index}>
                  <h3>{card.title}</h3>
                  {card.title === "TIPOS" ? (
                    <div className="image-gallery-material">
                      {card.content.map((image, imgIndex) => (
                        <img src={image} alt={`Content ${imgIndex}`} key={imgIndex} className="imagenes-material" />
                      ))}
                    </div>
                  ) : (
                    <ul>
                      {card.content.map((text, idx) => (
                        <li key={idx}>{text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialPublicitario;
