import React, { useState, useEffect } from "react";
import "./voluntariados.css";
import { getFromFirebase } from "../functions/firebasehelper";

function Voluntariados() {
  const [voluntariados, setVoluntariados] = useState([]);

  useEffect(() => {
    const fetchVoluntariados = async () => {
      const data = await getFromFirebase("voluntariados");
      setVoluntariados(data);
    };
    fetchVoluntariados();
  }, []);

  return (
    <div>
      <h1>Lista de Voluntariados</h1>
      <ul className="voluntariados-list">
        {voluntariados.map((voluntariado) => (
          <li key={voluntariado.id}>
            <div className="voluntariado">
              <img src={voluntariado.imagenURL} alt={voluntariado.nombre} />
              <a className="voluntariado-name" href={`/voluntariados/${voluntariado.id}`}>
                {voluntariado.nombre}
              </a>
              <div className="voluntariado-description">{voluntariado.descripcion}</div>
              {/* Agrega aquí más detalles del voluntariado según tus datos */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Voluntariados;
