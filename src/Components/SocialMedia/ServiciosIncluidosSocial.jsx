import React, { useState, useEffect } from 'react';
import './ServiciosIncluidosSocial.css';
import Subtitle from '../common/Subtitle';

const ServiciosIncluidosSocial = ({ items, columns }) => {
  // Inicializar currentColumns basado en el tamaño de la ventana
  const getInitialColumns = () => {
    if (window.innerWidth <= 400) {
      return 1;
    } else if (window.innerWidth > 400 && window.innerWidth <= 768) {
      return 2;
    } else {
      return columns;
    }
  };

  const [currentColumns, setCurrentColumns] = useState(getInitialColumns);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setCurrentColumns(1); // Ajustar a 1 columna para pantallas muy pequeñas
      } else if (window.innerWidth > 400 && window.innerWidth <= 768) {
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