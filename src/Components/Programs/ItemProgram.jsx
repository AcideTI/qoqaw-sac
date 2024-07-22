import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import Aos from "aos";

const ItemProgram = ({ item }) => {
  useEffect(() => {
    Aos.init({
      duration: 650, // Duración de la animación en milisegundos
      once: true, // Permite que la animación se repita más de una vez
    });
  }, []);
  
  const { img, alt, icon, ref } = item;
  return (
    <Link to={ref} className="program" data-aos="zoom-in">
      <img src={img} alt={alt} className="program-img" />
      <div className="program-info">
        <h2>{alt}</h2>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default ItemProgram;