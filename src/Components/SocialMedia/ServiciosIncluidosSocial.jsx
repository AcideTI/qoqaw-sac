import React, { useState, useEffect } from 'react';
import './ServiciosIncluidosSocial.css';
import Subtitle from '../common/Subtitle';

const ServiciosIncluidosSocial = ({ items, columns }) => {
  const [currentColumns, setCurrentColumns] = useState(columns); // Número de columnas por defecto

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentColumns(2); // Ajustar a 2 columnas para pantallas pequeñas
      } else {
        setCurrentColumns(columns); // Ajustar a columnas por defecto para pantallas grandes
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar a la función al montar el componente

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columns]);

  return (
    <div className="servicios-incluidos-container">
      <div className="servicios-incluidos-title">
        <Subtitle text="El servicio incluye:" />
      </div>
      <div className="servicios-incluidos-grid" style={{ gridTemplateColumns: `repeat(${currentColumns}, 1fr)` }}>
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