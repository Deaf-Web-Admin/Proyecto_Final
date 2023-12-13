import './Register.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Register = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const correoRef = useRef(null);
  const avatarRef = useRef(null);
  const tipoRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const body = new FormData();
    body.append('correo', correoRef.current.value);
    body.append('tipo', tipoRef.current.value);
    body.append('username', usernameRef.current.value);
    body.append('password', passwordRef.current.value);
    body.append('avatar', avatarRef.current.files[0]);

    API.post('/users/register', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    navigate('/login');
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            minLength={3}
            required
            ref={usernameRef}
            placeholder="Su Nombre"
          />
          <input
            id="password"
            type="password"
            minLength={8}
            required
            ref={passwordRef}
            placeholder="Su Clave"
          />
          <input
            id="correo"
            type="email"
            required
            ref={correoRef}
            placeholder="Su Correo"
          />
          <select id="tipo" ref={tipoRef}>
            <option>Voluntario</option>
            <option>Solicitante</option>
          </select>
          <label htmlFor="avatar" className="upload">
            Imagen de Perfil
          </label>
          <input type="file" id="avatar" ref={avatarRef} />
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Register;
