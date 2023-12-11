import './Register.css';

import { useContext, useRef } from 'react';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/userContext';

const Register = () => {
  const { login } = useContext(UserContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const avatarRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const body = new FormData();
    body.append('username', usernameRef.current.value);
    body.append('password', passwordRef.current.value);
    body.append('avatar', avatarRef.current.files[0]);

    API.post('/users/register', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      const loginBody = new FormData();
      loginBody.append('username', usernameRef.current.value);
      loginBody.append('password', passwordRef.current.value);

      API.post('/users/login', loginBody).then((res) => {
        login(
          {
            username: res.data.username,
            avatar: res.data.avatar,
          },
          res.data.token,
        );
      });
    });
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
            placeholder="Su Correo"
          />
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
