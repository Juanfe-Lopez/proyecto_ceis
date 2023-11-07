import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserByEmail, getFromFirebaseID } from '../functions/firebasehelper';
import './Profile.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [userVoluntariados, setUserVoluntariados] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getUserByEmail(currentUser.email)
        .then((data) => {
          if (data) {
            setUserData(data);

            // Obtener información de voluntariados inscritos por el usuario
            if (data.voluntariados) {
              const voluntariadoPromises = data.voluntariados.map(async (voluntariadoId) => {
                const voluntariadoData = await getFromFirebaseID('voluntariados', voluntariadoId);
                return voluntariadoData;
              });

              Promise.all(voluntariadoPromises).then((voluntariados) => {
                setUserVoluntariados(voluntariados);
              });
            }
          } else {
            console.log('No se encontraron datos del usuario.');
          }
        })
        .catch((error) => {
          console.error('Error al obtener datos del usuario:', error);
        });
    }
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      // Realiza cualquier acción necesaria al cerrar sesión, si es necesario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const navigateToCreate = () => {
    navigate('/Crear');
  };

  return (
    <div className="profile-container">
      <h2>Tu Perfil</h2>
      {userData && (
        <div className="user-info">
          <div>
            <strong>Nombre:</strong> {userData.name}
          </div>
          <div>
            <strong>Correo Electrónico:</strong> {userData.email}
          </div>
          <div>
            <strong>Habilidades:</strong> {userData.skills || 'N/A'}
          </div>
          <div>
            <strong>Intereses:</strong> {userData.interests || 'N/A'}
          </div>
          {/* Puedes agregar más campos de información según tus necesidades */}
        </div>
      )}

      {/* Mostrar los voluntariados inscritos */}
      {userVoluntariados.length > 0 && (
        <div className="user-voluntariados">
          <h3>Voluntariados Inscritos:</h3>
          <ul>
            {userVoluntariados.map((voluntariado) => (
              <li key={voluntariado.id}>{voluntariado.nombre}</li>
            ))}
          </ul>
        </div>
      )}

      {userData && userData.role === 'ong' && (
        <div className="ong-options">
          {/* Aquí puedes agregar opciones adicionales para usuarios con rol "ong" */}
          <button onClick={navigateToCreate}>Crear Voluntariado</button>
          <button>Eliminar Voluntariado</button>
        </div>
      )}
      <button onClick={handleSignOut}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
