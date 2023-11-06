import React from 'react';
import './donar.css';
function Donations() {
  return (
    <div className="donations">
      <h2>Donaciones</h2>
      <p>¡Tu apoyo es esencial para que podamos continuar haciendo la diferencia! Si deseas hacer una donación, por favor utiliza los siguientes métodos:</p>
      <ul>
        <li>
          <strong>Donación en Línea:</strong> Puedes hacer una donación segura en línea a través de nuestro sitio web.
        </li>
        <li>
          <strong>Donación por Transferencia Bancaria:</strong> Puedes hacer una transferencia a la siguiente cuenta bancaria: <br />
          Nombre del Banco: [Nombre del Banco]<br />
          Número de Cuenta: [Número de Cuenta]<br />
          Titular de la Cuenta: [Titular de la Cuenta]
        </li>
        <li>
          <strong>Donación en Efectivo:</strong> Aceptamos donaciones en efectivo en nuestra oficina ubicada en [Dirección].
        </li>
      </ul>
    </div>
  );
}

export default Donations;
