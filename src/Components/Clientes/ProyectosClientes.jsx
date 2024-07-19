import React from "react";
import "./ProyectoClientes.css";
import cariluis from "../../assets/clientes/cariluis.webp";
import perutips from "../../assets/clientes/perutips.webp";
import simoni from "../../assets/clientes/simoni.webp";
import natal from "../../assets/clientes/natal.webp";
import camara from "../../assets/clientes/camara.webp";
import emperador from "../../assets/clientes/emperador.webp";
import diamond from "../../assets/clientes/diamond.webp";
import Subtitle from "../common/Subtitle";

const ProyectosClientes = () => {
  const clientes = [
    { src: cariluis, alt: "Cariluis" },
    { src: perutips, alt: "Perutips Experience" },
    { src: simoni, alt: "Simoni" },
    { src: natal, alt: "Natal & Vita" },
    { src: camara, alt: "Camara de Comercio e Industria del Perú" },
    { src: emperador, alt: "Emperador" },
    { src: diamond, alt: "Diamond Silver" },
  ];
  return (
    <div className="proyecto-clientes-container">
      <Subtitle text="Proyectos de Clientes" />
      <div className="image-grid">
        {clientes.map((cliente, index) => (
          <div className="card" key={index}>
            <img src={cliente.src} alt={cliente.alt} />
            <div className="overlay">{cliente.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosClientes;
