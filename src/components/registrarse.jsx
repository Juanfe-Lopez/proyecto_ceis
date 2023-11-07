import React, { useState } from 'react';
import './registrarse.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { addToFirebase } from '../functions/firebasehelper';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [role, setRole] = useState('normal'); // Estado para almacenar el rol, valor predeterminado: 'normal'

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuario registrado:', user);

      const userObject = {
        email,
        name,
        skills,
        interests,
        role, // Agrega el rol al objeto de usuario
        voluntariados: [] // Inicializar voluntariados como un array vacío

      };

      // Agregar el objeto de usuario a Firebase en la colección 'users'
      await addToFirebase({ objectToSave: userObject }, 'users');

      navigate('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <div className="register-form">
      <h2>Registrarse</h2>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Nombre Completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="skills">Habilidades:</label>
        <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={handleSkillsChange}
          rows="4"
        />
      </div>
      <div className="form-group">
        <label htmlFor="interests">Intereses:</label>
        <textarea
          id="interests"
          name="interests"
          value={interests}
          onChange={handleInterestsChange}
          rows="4"
        />
      </div>
      <div className="form-group">
        <label>Rol:</label>
        <div>
          <input
            type="radio"
            id="normal"
            name="role"
            value="normal"
            checked={role === 'normal'}
            onChange={handleRoleChange}
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div>
          <input
            type="radio"
            id="ong"
            name="role"
            value="ong"
            checked={role === 'ong'}
            onChange={handleRoleChange}
          />
          <label htmlFor="ong">ONG</label>
        </div>
      </div>
      <button onClick={handleRegistration}>Registrarse</button>
    </div>
  );
};

export default Register;
