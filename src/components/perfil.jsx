import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserByEmail } from '../functions/firebasehelper';
import './Profile.css'; // Asegúrate de importar tu archivo CSS
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate =useNavigate();
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      getUserByEmail(currentUser.email)
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login')
      // Realiza cualquier acción necesaria al cerrar sesión, si es necesario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
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
      {userData && userData.role === 'ong' && (
        <div className="ong-options">
          {/* Aquí puedes agregar opciones adicionales para usuarios con rol "ong" */}
          <button>Crear Voluntariado</button>
          <button>Eliminar Voluntariado</button>
        </div>
      )}
      <button onClick={handleSignOut}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
