import React from 'react';
import './contactanos.css'

function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contactanos</h2>
      <p>¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros:</p>
      <ul>
        <li>Correo Electrónico: sis@gmail.com</li>
        <li>Teléfono: +123 456 7890</li>

      </ul>
      <p>O puedes completar el formulario a continuación y te responderemos lo antes posible:</p>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactUs;
