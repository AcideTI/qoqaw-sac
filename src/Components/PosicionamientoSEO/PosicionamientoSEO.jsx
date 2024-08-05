import React from 'react';
import './PosicionamientoSEO.css';
import Subtitle from '../common/Subtitle';
import posicionamientoseo from '../../assets/posicionamientoseo/rocket.webp';

const PosicionamientoSEO = () => {
  return (
    <div className="posicionamiento-seo-container">
      <div className="posicionamiento-seo-title">
      <Subtitle text="Posicionamiento SEO" />
      </div>
      <h2>¡POSICIONAMOS TU ÉXITO EN CADA BÚSQUEDA!</h2>
      <div className="posicionamiento-seo-content">
        <div className="posicionamiento-seo-text">
          <p>
            El servicio de posicionamiento SEO, o Search Engine Optimization (Optimización para Motores de Búsqueda) en inglés, es un conjunto de técnicas y estrategias utilizadas para mejorar la visibilidad y el ranking de un sitio web en los resultados de búsqueda orgánica de los motores de búsqueda.
          </p>
        </div>
        <div class="posicionamiento-seo-card">
        <div className="posicionamiento-seo-image">
          <img src={posicionamientoseo} alt="Posicionamiento SEO" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default PosicionamientoSEO;