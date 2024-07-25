import React from 'react';
import SocialMediaService from '../Components/SocialMedia/SocialMediaService';
import ServiciosIncluidosSocial from '../Components/SocialMedia/ServiciosIncluidosSocial';

const items = [
  "Estrategias Personalizadas",
  "Contenido Atractivo",
  "Interacción Activa",
  "Análisis de Datos",
  "Campañas Publicitarias Efectivas",
  "Monitorización Constante"
];

const SocialMediaPage = () => {
  return (
    <div>
      <SocialMediaService />
      <ServiciosIncluidosSocial items={items} columns={6} />
    </div>
  );
};

export default SocialMediaPage;