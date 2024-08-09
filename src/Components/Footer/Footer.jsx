import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const yearInput = document.getElementById('year');
    if (yearInput) {
      yearInput.value = new Date().getFullYear();
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!form.current.user_email.value) {
      newErrors.user_email = 'El correo electrónico es obligatorio';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('service_lfbk69q', 'template_w4lhfmp', form.current, 'h9A2DAIkqGvL01Sn3')
      .then(
        () => {
          setMessageSent(true);
          setInputMessage('Correo enviado con éxito, gracias por contactarnos');
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        }
      );
  };

  return (
    <div className={`footer-container ${messageSent ? "mensaje-enviado" : "sin-enviar"}`}>
      <div className="footer-content">
        <div className="footer-column">
          <p className="footer-title">Resultados</p>
          <p>Transformamos ideas en resultados <br /> tangibles. Potenciamos tu marca.</p>
          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      
        <div className="footer-column">
          <p className="footer-title">Conectar</p>
          <p>informes@qoqaw.com</p>
          <p>914242749</p>
        </div>
      
        <div className="footer-column">
          <p className="footer-title">Brillar</p>
          <form className="footer-form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="email">Dirección de correo electrónico</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder={errors.user_email ? errors.user_email : "Ingrese su correo electrónico aquí"}
              className={errors.user_email ? "input-error" : ""}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={messageSent}
            />
            <input type="hidden" id="year" name="year" />
            <button type="submit" disabled={messageSent}>Enviar formulario de contacto</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;