import React from 'react';
import './ContactoInicio.css';
import FormularioContacto from './FormularioContacto';
import "../Hero/Hero.css";

const ContactoInicio = () => {
  return (
    <div className="contacto-inicio-container">
      <div className="contacto-inicio-info">
        <h1>Contacto</h1>
        <p>¡Contáctanos hoy y comienza a brillar en la web! Descubre  <br />cómo podemos llevar tu negocio al siguiente nivel digital.</p>
        <h3>Conectar</h3>
        <p>914242749</p>
        <h3>Efectiva</h3>
        <p>informes@qoqaw.com</p>
      </div>
      <div className='contacto-inicio-form'>
        <FormularioContacto />
      </div>
    </div>
  );
}

export default ContactoInicio;