import React from 'react'
import "./Servicios.css";
import tienda from "../../assets/desarrollo-software/tienda.webp";
import web from "../../assets/desarrollo-software/web.webp";
import software from "../../assets/desarrollo-software/software.webp";
import erp from "../../assets/desarrollo-software/erp.webp";
import Subtitle from "../common/Subtitle";
import ItemProgram from "../Programs/ItemProgram";
const ItemsPrograms = [
  {
    img: tienda,
    alt: "Tiendas Virtuales",
    icon: "fa-solid fa-cart-shopping",
    ref: "/servicios/tiendavirtual",
  },
  {
    img: web,
    alt: "Páginas Web",
    icon: "fa-solid fa-laptop-code",
    ref: "/servicios/paginaweb",
  },
  {
    img: software,
    alt: "Software",
    icon: "fa-solid fa-code",
    ref: "/servicios/software",
  },
  {
    img: erp,
    alt: "ERP",
    icon: "fa-solid fa-sitemap",
    ref: "/servicios/erp",
  },
];

const DesarrolloSoftware = () => {
  return (
    <div className='service'>
      <Subtitle text='Desarrollo & Software'/>
      <div className="service-container">
        {ItemsPrograms.map((item, index) => (
          <ItemProgram key={index} item={item} />
          
        ))}
      </div>
    </div>
  )
}

export default DesarrolloSoftware
