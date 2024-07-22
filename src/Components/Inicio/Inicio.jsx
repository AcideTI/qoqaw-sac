import React from 'react';
import './Inicio.css';
import videoSrc from '../../assets/video.mp4';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-content">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="content-overlay">
        <h1>Soluciones <br />Digitales, Éxitos <br />Reales</h1>
        <p>Haz crecer tu marca con nosotros</p>
        <div className="button-container-overlay">
          <Link to="/servicios" className="transparent-button">Descubre</Link>
          <Link to="/contacto" className="transparent-button">Contacta</Link>
        </div>
      </div>
    </div>
    
  );
}

export default Inicio;