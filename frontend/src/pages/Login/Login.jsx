import './Login.css';

import { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/userContext';

const Login = () => {
  const { login } = useContext(UserContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append('username', usernameRef.current.value);
    body.append('password', passwordRef.current.value);

    API.post('/users/login', body).then((res) => {
const ConvertirCorreodeASCIIaBase64=btoa(res.data.correo)
      localStorage.setItem("Dataw",ConvertirCorreodeASCIIaBase64)
      login(
        {
          correo: res.data.correo,
          tipo: res.data.tipo,
          username: res.data.username,
          avatar: res.data.avatar,
          check1: res.data.check1,
          check2: res.data.check2,
          createdAt: res.data.createdAt,
        },
        res.data.token,
      );
    });
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
          <label htmlFor="username">Username</label>
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
          <div className="ButtonContainer">
            <button type="submit">Entrar</button>
            <NavLink to="/Register">
              <button>Crear Cuenta</button>
            </NavLink>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
