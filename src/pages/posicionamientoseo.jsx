import React from 'react'
import ServiciosIncluidosSocial from '../Components/SocialMedia/ServiciosIncluidosSocial';
import PosicionamientoSEO from '../Components/PosicionamientoSEO/PosicionamientoSEO';
const items = [
  "Estrategias Personalizadas",
  "Optimización de palabras clave",
  "Optimización de contenido",
  "Optimización técnica",
  "Link building",
  "Análisis de competencia",
  "Optimización local",
  "Seguimiento y análisis",
];

const PosicionamientoSEOPage = () => {
  return (
    <div>
      <PosicionamientoSEO />
      <ServiciosIncluidosSocial items={items} columns={4} />
    </div>
  )
}

export default PosicionamientoSEOPage
