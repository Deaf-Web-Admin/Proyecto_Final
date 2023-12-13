import './Profile.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/userContext';
const Profile = () => {
  const { user } = useContext(UserContext);
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
            <></>
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
