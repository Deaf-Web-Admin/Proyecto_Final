import './Nav.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

const Navigator = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <ul>
      <li>
        <NavLink to="/" className="homelink">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink to="/Anunciosv1" className="postlink">
          Anuncios
        </NavLink>
      </li>

      {user !== null ? (
        <>
          <li>
            <NavLink onClick={logout} className="logoutlink">
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login" className="loginlink">
              Login
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigator;
