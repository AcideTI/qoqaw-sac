import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const FormularioContacto = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const yearInput = document.getElementById('year');
    if (yearInput) {
      yearInput.value = new Date().getFullYear();
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q0kkmtd', 'template_gq0hv4z', form.current, 'Kpe9ELspeBx9V6e-A')
      .then(
        () => {
          setMessageSent(true);
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        }
      );
  };

  return (
    <div className={`contacto-container ${messageSent ? "mensaje-enviado" : "sin-enviar"}`}>
      <form className="formulario-contacto-efecto" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="from_name">Nombre</label>
          <input type="text" id="from_name" name="from_name" placeholder="Ingrese su nombre aquí" />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Correo electrónico</label>
          <input type="email" id="user_email" name="user_email" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" placeholder="Ingrese su mensaje aquí"></textarea>
        </div>
        <input type="hidden" id="year" name="year" />
        <button type="submit" className="btn-contact">
          Enviar mensaje
        </button>
      </form>
      {messageSent && (
        <div className="overlay-branding">
          <h1>¡Mensaje enviado con éxito!</h1>
          <h2>Gracias por contactarnos</h2>
        </div>
      )}
    </div>
  );
};

export default FormularioContacto;