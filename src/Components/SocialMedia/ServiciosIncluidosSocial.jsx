import React from 'react';
import './ServiciosIncluidosSocial.css';
import Subtitle from '../common/Subtitle';

const ServiciosIncluidosSocial = ({ items, columns }) => {
  return (
    <div className="servicios-incluidos-container">
      <div className="servicios-incluidos-title">
        <Subtitle text="El servicio incluye:" />
      </div>
      <div className="servicios-incluidos-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map((item, index) => (
          <div key={index} className="servicio-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosIncluidosSocial;