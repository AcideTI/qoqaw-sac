import React from 'react'
import "./Servicios.css";
import brading from "../../assets/brading-disenio/branding.webp";
import material from "../../assets/brading-disenio/material.webp";
import packaging from "../../assets/brading-disenio/packaging.webp";
import identidad from "../../assets/brading-disenio/identidad.webp";
import disenio from "../../assets/brading-disenio/disenio.webp";
import Subtitle from "../common/Subtitle";
import ItemProgram from "../Programs/ItemProgram";
const ItemsPrograms = [
  {
    img: brading,
    alt: "Branding",
    icon: "fa-solid fa-arrow-up-right-dots",
    ref: "/servicios/branding",
  },
  {
    img: material,
    alt: "Material Publicitario",
    icon: "fa-solid fa-shirt",
    ref: "/servicios/materialpublicitario",
  },
  {
    img: packaging,
    alt: "Packaging",
    icon: "fa-solid fa-box",
    ref: "/servicios/diseniopackaging",
  },
  {
    img: identidad,
    alt: "Identidad",
    icon: "fa-solid fa-users",
    ref: "/servicios/manualidentidad",
  },
  {
    img: disenio,
    alt: "Diseño UX/UI",
    icon: "fa-solid fa-compass-drafting",
    ref: "/servicios/diseniouxui",
  },
];

const BrandingDisenio = () => {
  return (
    <div className='service'>
      <Subtitle text='Branding & Diseño'/>
      <div className="service-container">
        {ItemsPrograms.map((item, index) => (
          <ItemProgram key={index} item={item} />
          
        ))}
      </div>
    </div>
  )
}

export default BrandingDisenio
