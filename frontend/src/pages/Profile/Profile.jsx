import './Profile.css';

import { useContext, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/userContext';
const modalmsg3 = () => {
  Swal.fire({
    title: 'Publicacion Exitosa',
    text: 'Perfecto!! creamos tu publicacion',
    imageUrl: 'https://siscapem.files.wordpress.com/2014/10/aplausos-4.gif',
    imageWidth: 200,
    imageHeight: 100,
    background: '#3ba3ef',
    color: 'Black',
    confirmButtonColor: '#c34548',
    didOpen: true,
    imageAlt: 'dos manos aplaudiendo',
  });
};
const Profile = () => {
  const tituloRef = useRef(null);
  const categoriaRef = useRef(null);
  const contenidoRef = useRef(null);
  const coverRef = useRef(null);
  const contactoRef = localStorage.getItem('Dataw');
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  if (user.tipo == 'Solicitante') {
    const ConvertirCorreodeASCIIaBase64 = btoa(user.correo);
    localStorage.setItem('DataW', user.correo);
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const body = new FormData();
    body.append('titulo', tituloRef.current.value);
    body.append('categoria', categoriaRef.current.value);
    body.append('contenido', contenidoRef.current.value);
    body.append('cover', coverRef.current.files[0]);
    body.append('contacto', contactoRef);

    API.post('/posts/', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    modalmsg3();
    navigate('/profile');
  };
  return (
    <>
      <Header />
      <main className="profile">
        <div className="DIVEncabezado">
          <div className="DIVEncabezadoTitulo">
            <h2>
              Hola {user.tipo} {user.username} :)
            </h2>
            <h3>
              Si tu correo {user.correo} ya no esta activo, haznoslo saber a
              InclusionPerenne@eltecnico.heliohost.us.
            </h3>
          </div>
          <div className="DIVEncabezadoImagen">
            <img src={user.avatar} alt={user.username} />
          </div>
        </div>
        <div className="Container">
          {user.tipo == 'Voluntario' ? (
            <>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titulo" ref={tituloRef} />
                <select ref={categoriaRef}>
                  <option>Personas Mayores</option>
                  <option>Discapacitados</option>
                </select>
                <input type="text" placeholder="Su Anuncio" ref={contenidoRef} />{' '}
                <label htmlFor="avatar" className="upload">
                  Imagen
                </label>
                <input type="file" id="avatar" ref={coverRef} />
                <button type="submit">Publicar</button>
              </form>
            </>
          ) : (
            <>
              <NavLink to="/Anunciosv1">
                <button>Ver Anuncios</button>
              </NavLink>
            </>
          )}
        </div>
        <div className="InfoUsuario">
          {' '}
          <p>
            Te uniste a nosotros
            {user.createdAt !== '' ? <> el {user.createdAt}</> : <> Hoy!!!</>}
            {user.check1 == false ? (
              <> y aun no estas completamente Verificado</>
            ) : (
              <> y ya estas Verificado</>
            )}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
