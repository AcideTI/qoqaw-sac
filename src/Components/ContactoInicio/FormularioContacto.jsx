import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const FormularioContacto = () => {
  const form = useRef();

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
          alert('¡Mensaje enviado con éxito!');
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
  );
};

export default FormularioContacto;