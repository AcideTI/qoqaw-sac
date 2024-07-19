import React from "react";
import "./Ubication.css";

const Ubication = () => {
  return (
    <div className="ubication-container">
      <div className="ubication-content">
        <div className="ubication-text">
          <h1>Contacto</h1>
          <p>
            Encuentra nuestra agencia de marketing digital para <br /> potenciar
            tu marca y conectar con tu audiencia de manera efectiva.
          </p>
          <h3>Ubicación</h3>
          <p>Urb. ADEPA, La esperanza B- 11, Jlb y Rivero, Arequipa, Peru</p>
          <h3>Horario</h3>
          <p>Lunes a Viernes</p>
        </div>
        <div className="ubication-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284634014!2d-71.53163745767083!3d-16.418172241969458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0b0b0b0b0b%3A0x0!2zMTbCsDI1JzA1LjQiUyA3McKwMzEnNTMuOSJX!5e0!3m2!1sen!2spe!4v1633029381234!5m2!1sen!2spe"
            width="650"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubication;
