import React from 'react';
import './MarketingDigital.css';
import marketingdigital from '../../assets/digital-marketing1.webp';

const MarketingDigital = () => {
  return (
    <div className="marketing-digital-container">
      <div className="marketing-digital-text">
        <h1>Agencia de <br />Marketing</h1>
        <p>Construyendo sueños, creando conexiones.</p>
        <p>Descubre quiénes somos y cómo damos vida a tu visión en QOQAW</p>
      </div>
      <div className="marketing-digital-image">
      <img src={marketingdigital} alt="Marketing Digital" className="oval-image" />
      </div>
    </div>
  );
}

export default MarketingDigital;
