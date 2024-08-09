import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const FormularioContacto = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const yearInput = document.getElementById("year");
    if (yearInput) {
      yearInput.value = new Date().getFullYear();
    }
  }, []);

  const validateForm = () => {
    const formElements = form.current.elements;
    const errors = {};

    if (!formElements.from_name.value.trim()) {
      errors.from_name = "El nombre es obligatorio";
    }
    if (!formElements.user_email.value.trim()) {
      errors.user_email = "El correo electrónico es obligatorio";
    }
    if (!formElements.mensaje.value.trim()) {
      errors.mensaje = "El mensaje es obligatorio";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_lfbk69q",
        "template_exfflzh",
        form.current,
        "h9A2DAIkqGvL01Sn3"
      )
      .then(
        () => {
          setMessageSent(true);
        },
        (error) => {
          alert("Error al enviar el mensaje: " + error.text);
        }
      );
  };

  return (
    <div
      className={`contacto-container ${
        messageSent ? "mensaje-enviado" : "sin-enviar"
      }`}
    >
      <form
        className="formulario-contacto-efecto"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="form-group">
          <label htmlFor="from_name">Nombre</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder={
              errors.from_name ? errors.from_name : "Ingrese su nombre aquí"
            }
            className={errors.from_name ? "input-error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Correo electrónico</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder={
              errors.user_email
                ? errors.user_email
                : "Ingrese su correo electrónico"
            }
            className={errors.user_email ? "input-error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder={
              errors.mensaje ? errors.mensaje : "Ingrese su mensaje aquí"
            }
            className={errors.mensaje ? "input-error" : ""}
          ></textarea>
        </div>
        <input type="hidden" id="year" name="year" />
        <button type="submit" className="btn-contact">
          Enviar mensaje
        </button>
      </form>
      {messageSent && (
        <div className="overlay-contacto-inicio">
          <h1>¡Mensaje enviado con éxito!</h1>
          <h2>Gracias por contactarnos</h2>
        </div>
      )}
    </div>
  );
};

export default FormularioContacto;
