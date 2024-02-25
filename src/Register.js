import React, { useState } from 'react';
import Recuperacion from './Recuperacio';
import placeholder from './assets/placeholder.png';
import registro_prueba from './registro_prueba';  // Importa el componente registro_prueba
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
      onLogin(true);
      setError(false);
    } else {
      setError(true);
      onLogin(false);
    }
  };

  const handleRecovery = () => {
    setShowRecovery(true);
  };

  if (showRecovery) {
    return <Recuperacion />;
  }

  return (
    <div className="container">
      <div className="barra_iz"></div>
      <div className="login-container">
        <div className="login">
          <form onSubmit={handleSubmit} className="login-form">
            
            <div className="fotoplace">
              <img className="imagen"
                src={placeholder}
                alt="Logo"
              />
                  <h2 className="login-text">Register</h2>
              {/* Integra aquí el contenido del formulario de registro_prueba */}
              <div className='registro'>
              {registro_prueba()}
              </div>
            </div>
          
            {error && <p className="error">Usuario o contraseña incorrectos</p>}
           
           
            <div className="ultimo-boton">
              
            </div>
          </form>
        </div>
      </div>
      <div className="barra_der"></div>
    </div>
  );
}

export default Register;
