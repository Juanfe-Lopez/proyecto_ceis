import React, { useState } from 'react';
import './CrearVoluntariado.css'; // Asegúrate de importar tu archivo CSS
import { addToFirebase } from '../functions/firebasehelper'; // Asegúrate de importar tu función para agregar datos a Firebase
import { useNavigate } from 'react-router-dom';

const CrearVoluntariado = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('');
  const [fecha, setFecha] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [imagenURL, setImagenURL] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleRequisitosChange = (e) => {
    setRequisitos(e.target.value);
  };

  const handleUbicacionChange = (e) => {
    setUbicacion(e.target.value);
  };

  const handleImagenURLChange = (e) => {
    setImagenURL(e.target.value);
  };

  const handleCrearVoluntariado = async () => {
    const voluntariadoObject = {
      nombre,
      descripcion,
      estado,
      fecha,
      requisitos,
      ubicacion,
      imagenURL,
    };

    // Agregar el objeto de voluntariado a Firebase en la colección 'voluntariados'
    await addToFirebase({ objectToSave: voluntariadoObject }, 'voluntariados');

    // Redirigir a la página de voluntariados u otra página según tus necesidades
    navigate('/voluntariados');
  };

  return (
    <div className="crear-voluntariado-form">
      <h2>Crear Voluntariado</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={handleDescripcionChange}
          rows="4"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={estado}
          onChange={handleEstadoChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fecha}
          onChange={handleFechaChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="requisitos">Requisitos:</label>
        <textarea
          id="requisitos"
          name="requisitos"
          value={requisitos}
          onChange={handleRequisitosChange}
          rows="4"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ubicacion">Ubicación:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={ubicacion}
          onChange={handleUbicacionChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imagenURL">URL de la Imagen:</label>
        <input
          type="text"
          id="imagenURL"
          name="imagenURL"
          value={imagenURL}
          onChange={handleImagenURLChange}
          required
        />
      </div>
      <button onClick={handleCrearVoluntariado}>Crear Voluntariado</button>
    </div>
  );
};

export default CrearVoluntariado;
