import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../img/logo.png';
import './navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // El usuario ha iniciado sesión
        setUser(authUser);
      } else {
        // El usuario ha cerrado sesión
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Realiza cualquier acción necesaria al cerrar sesión, si es necesario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/voluntariados">Match Voluntariados</Link>
      </div>
      <div>
        <Link to="/Estadisticas">Estadisticas</Link>
      </div>
      <div>
        <Link to="/Contactanos">Contactanos</Link>
      </div>
      <div>
        <Link to="/Donar">Donar</Link>
      </div>
      <div>
        {user ? (
          <Link to="/Perfil">
            Perfil
          </Link>
        ) : (
          <Link to="/Login">Iniciar Sesión</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
