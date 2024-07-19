import React from 'react'
import './Hero.css'
import FormularioContacto from '../ContactoInicio/FormularioContacto'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Contacto</h1>
        <p>Conéctate con nosotros para potenciar tu marca <br /> y conectar efectivamente.</p>
        <div className='form-container'>
          <FormularioContacto />
        </div>
        
      </div>
    </div>
  )
}

export default Hero
