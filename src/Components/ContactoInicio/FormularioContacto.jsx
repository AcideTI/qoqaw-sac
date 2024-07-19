import React from "react";

const FormularioContacto = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Ingrese su nombre aquí" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su correo electrónico"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" placeholder="Ingrese su mensaje aquí"></textarea>
      </div>
      <button type="submit" className="btn-contact">
        Enviar mensaje
      </button>
    </form>
  );
};

export default FormularioContacto;
