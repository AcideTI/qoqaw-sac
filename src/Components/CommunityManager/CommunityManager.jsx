import React from 'react'
import './CommunityManager.css'
import community from "../../assets/marketing-digital/community.webp";

const CommunityManager = () => {
  return (
    <div className='community-container'>
      <h1>Community Manager</h1>
      <h2>¡Mejora el posicionamiento de tu marca!</h2>
      
      <div className="community-container-descripcion">
        <img src={community} alt="Community Manager" className="community-image" />
        <div className="community-text">
          <h3>¿Qué es un <br/>Community Manager?</h3>
          <p>
            Es un profesional encargado de gestionar y administrar la presencia de una marca, empresa, producto o servicio en las redes sociales y comunidades en línea. Su función principal es construir, cultivar y mantener relaciones positivas con la audiencia objetivo a través de la participación activa y la gestión de contenido.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommunityManager