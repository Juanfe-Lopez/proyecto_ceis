import React, { useState } from 'react';
import './registrarse.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el registro
    console.log('Registrando con correo:', email);
    console.log('Nombre:', name);
    console.log('Habilidades:', skills);
    console.log('Intereses:', interests);
  };

  return (
    <div className="register-form">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
