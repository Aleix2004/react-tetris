// src/Recuperacion.js

import React, { useState } from 'react';

function Recuperacion() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar la recuperación de contraseña
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Recuperar contraseña</button>
        </form>
      ) : (
        <p>Si existe una cuenta con {email}, recibirás un enlace de recuperación.</p>
      )}
    </div>
  );
}

export default Recuperacion;
