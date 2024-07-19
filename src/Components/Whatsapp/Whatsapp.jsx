import React from 'react'
import './Whatsapp.css'
const numeroWhatsapp = '51914242749'
const messageWhatsapp = 'Hola, estoy interesado en sus servicios 😊'
const Whatsapp = () => {
  return (
    <a href={`https://wa.me/${numeroWhatsapp}?text=${messageWhatsapp}`} target="_blank" className='btnWhatsapp'>
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default Whatsapp
