import React from "react";
import "./ProyectoClientes.css";
import cariluis from "../../assets/clientes/cariluis.webp";
import perutips from "../../assets/clientes/perutips.webp";
import simoni from "../../assets/clientes/simoni.webp";
import natal from "../../assets/clientes/natal.webp";
import camara from "../../assets/clientes/camara.webp";
import emperador from "../../assets/clientes/emperador.webp";
import diamond from "../../assets/clientes/diamond.webp";
import sky from "../../assets/clientes/sky.webp";
import biomab from "../../assets/clientes/biomab.webp";
import volta from "../../assets/clientes/volta.webp";
import agro from "../../assets/clientes/agro.webp";
import sullca from "../../assets/clientes/sullca.webp";
import acide from "../../assets/clientes/acide.webp";
import cariluis_p from "../../assets/clientes/cariluis-p.webp";
import acide_p from "../../assets/clientes/acide-p.webp";
import camara_p from "../../assets/clientes/camara-p.webp";
import volta_p from "../../assets/clientes/volta-p.webp";
import Subtitle from "../common/Subtitle";
import { Link } from "react-router-dom";

const ProyectosClientes = () => {
  const clientes = [
    { src: acide, alt: "Acide", secondSrc: acide_p },
    { src: cariluis, alt: "Cariluis", secondSrc: cariluis_p },
    { src: simoni, alt: "Simoni", secondSrc: cariluis_p },
    { src: natal, alt: "Natal & Vita", secondSrc: cariluis_p },
    { src: perutips, alt: "Perutips Experience", secondSrc: cariluis_p },
    { src: camara, alt: "Camara de Comercio e Industria del Perú", secondSrc: camara_p },
    { src: emperador, alt: "Emperador", secondSrc: cariluis_p },
    { src: diamond, alt: "Diamond Silver", secondSrc: cariluis_p },
    { src: sky, alt: "Sky Viajes y Turismo", secondSrc: cariluis_p },
    { src: biomab, alt: "Biomab", secondSrc: cariluis_p },
    { src: volta, alt: "Colegio Alessandro Volta", secondSrc: volta_p },
    { src: agro, alt: "Agro Industrias Marsa", secondSrc: cariluis_p },
    { src: sullca, alt: "Sullca", secondSrc: cariluis_p },
  ];

  return (
    <div className="proyecto-clientes-container">
      <Subtitle text="Proyectos de Clientes" />
      <div className="image-grid">
        {clientes.map((cliente, index) => (
          <Link  to= ""className="card" key={index}>
            <img src={cliente.src} alt={cliente.alt} />
            <div
              className="second-image"
              style={{ backgroundImage: `url(${cliente.secondSrc})` }}
            ></div>
            <div className="overlay">{cliente.alt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProyectosClientes;