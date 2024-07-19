import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <div className="footer-container">
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
          <form className="footer-form">
            <label htmlFor="email">Dirección de correo electrónico</label>
            <input type="email" id="email" placeholder="Ingrese su correo electrónico aquí" />
            <button type="submit">Enviar formulario de contacto</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;