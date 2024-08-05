import React, { useState, useEffect } from "react";
import Cliente from "./Cliente";
import "./ClientesCarousel.css";
import cariluis from "../../assets/clientes/cariluis.webp";
import perutips from "../../assets/clientes/perutips.webp";
import simoni from "../../assets/clientes/simoni.webp";
import natal from "../../assets/clientes/natal.webp";
import camara from "../../assets/clientes/camara.webp";
import emperador from "../../assets/clientes/emperador.webp";
import diamond from "../../assets/clientes/diamond.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Subtitle from "../common/Subtitle";
import { Link } from "react-router-dom";

const clientes = [
  {
    img: cariluis,
    text: "ERP",
    alt: "Cariluis",
    description: "Sistema de gestión de recursos empresariales",
  },
  {
    img: perutips,
    text: "Website",
    alt: "PeruTips",
    description: "Blog de viajes y turismo",
  },
  {
    img: simoni,
    text: "Website",
    alt: "Simoni",
    description: "Tienda de ropa y accesorios",
  },
  {
    img: natal,
    text: "Website",
    alt: "Natal & Vita",
    description: "Tienda de ropa y accesorios",
  },
  {
    img: camara,
    text: "Website",
    alt: "Cámara de Comercio de Industrias del Perú",
    description: "Organización empresarial",
  },
  {
    img: emperador,
    text: "Website",
    alt: "Emperador",
    description: "Tienda de ropa y accesorios",
  },
  {
    img: diamond,
    text: "Website",
    alt: "Diamond Silver",
    description: "Tienda de ropa y accesorios",
  },
];

const ClientesCarousel = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  });

  useEffect(() => {
    const updateSettings = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
          slidesToScroll: 1,
        }));
      } else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 3,
          slidesToScroll: 1,
        }));
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  return (
    <div className="carrousel-section">
      <Subtitle text="Nuestros Clientes" />
      <div className="slider-carrousel">
        <Slider {...settings}>
          {clientes.map((cliente, index) => (
            <Cliente
              key={index}
              img={cliente.img}
              text={cliente.text}
              alt={cliente.alt}
              description={cliente.description}
            />
          ))}
        </Slider>
      </div>
      <Link to="/proyectos" className="btn">Ver más</Link>
    </div>
  );
};

export default ClientesCarousel;