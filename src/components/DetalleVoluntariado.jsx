import React, { useState, useEffect } from 'react';
import './DetalleVoluntariado.css';
import { useParams } from 'react-router-dom';
import { getFromFirebaseID, getUserByEmail, getUserByEmail2, updateFromFirebase } from '../functions/firebasehelper';
import { useAuth } from '../context/AuthContext'; // Asegúrate de importar tu contexto de autenticación
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Asegúrate de importar tu instancia de Firestore
import { useNavigate } from 'react-router-dom';


function DetalleVoluntariado() {
    const navigate= useNavigate();
  const { id } = useParams();
  const [voluntariado, setVoluntariado] = useState(null);
  const { currentUser } = useAuth(); // Obtén el usuario actual desde el contexto de autenticación

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      getUserByEmail2(currentUser.email)
        .then((data) => {
          if (data) {
            setUserData(data);
          } else {
            console.log('No se encontraron datos del usuario.');
          }
        })
        .catch((error) => {
          console.error('Error al obtener datos del usuario:', error);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchVoluntariado = async () => {
      const data = await getFromFirebaseID('voluntariados', id);
      if (data) {
        setVoluntariado(data);
      } else {
        console.log('Voluntariado no encontrado.');
      }
    };
    fetchVoluntariado();
  }, [id]);

  if (!voluntariado) {
    return <div>Loading...</div>;
  }

  // Verifica si el usuario es de rol normal para mostrar el botón "Inscribirse"
  const isUserNormal = userData && userData.role === 'normal';

  const handleInscribirse = async () => {
    console.log('Usuario actual:', currentUser);
    console.log('Datos del usuario:', userData);
    console.log(userData.id);
    const docRef = doc(db, 'users', userData.id);
  
    try {
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
  
        const newArray = data.voluntariados || [];
        if (!newArray.includes(id)) {
          newArray.push(id);
  
          data.voluntariados = newArray;
  
          // Actualiza el documento en Firestore
          await updateDoc(docRef, data);
  
          alert('Te has inscrito exitosamente en el voluntariado.');
  
          // Redirige a la página principal después de la inscripción
          navigate('/');
        } else {
          alert('Ya estás inscrito en este voluntariado.');
        }
      }
    } catch (error) {
      console.error('Error al inscribirse:', error);
      alert('Ocurrió un error al inscribirse en el voluntariado. Inténtalo nuevamente más tarde.');
    }
  };
  

  return (
    <div className="content">
      <div className="details">
        <div className="details-img">
          <img src={voluntariado.imagenURL} alt={voluntariado.nombre} />
        </div>
        <div>
          <div className="details-info">
            <ul>
              <li>
                <h1>{voluntariado.nombre}</h1>
              </li>
              <li>{voluntariado.descripcion}</li>
              <li>Fecha: {voluntariado.fecha}</li>
              <li>Ubicación: {voluntariado.ubicacion}</li>
              <li>Estado: {voluntariado.estado}</li>
            </ul>
          </div>
        </div>
      </div>

        {/* Mostrar el botón "Inscribirse" solo si el usuario es de rol normal */}
        {isUserNormal && (
                <button onClick={handleInscribirse}>Inscribirse</button>
            )}
    </div>
  );
  
}

export default DetalleVoluntariado;
