import React from 'react'
import "./Servicios.css";
import program_1 from "../../assets/marketing.webp";
import program_2 from "../../assets/branding.webp";
import program_3 from "../../assets/software.webp";
import program_4 from "../../assets/investigacion.webp";
import program_5 from "../../assets/plan.webp";
import Subtitle from "../common/Subtitle";
import ItemProgram from "../Programs/ItemProgram";
const ItemsPrograms = [
  {
    img: program_1,
    alt: "Marketing Digital",
    icon: "fa-solid fa-globe",
  },
  {
    img: program_2,
    alt: "Branding & Diseño",
    icon: "fa-regular fa-folder",
  },
  {
    img: program_3,
    alt: "Software",
    icon: "fa-solid fa-code",
  },
  {
    img: program_4,
    alt: "Investigación",
    icon: "fa-solid fa-ranking-star",
  },
  {
    img: program_5,
    alt: "Plan de Marketing",
    icon: "fa-solid fa-square-poll-horizontal",
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
