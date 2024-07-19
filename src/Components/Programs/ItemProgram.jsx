import React from "react";
import { Link } from "react-router-dom";

const ItemProgram = ({item}) => {
  const { img, alt, icon } = item;
  return (
    <Link to = "/contacto" className="program">
      <img src={img} alt={alt} />
      <div className="program-info">
        <h2>{alt}</h2>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default ItemProgram;
