//https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png
import './NotFound.css';

import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src="https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png"
        alt="Imagen de triangulo con simbolo de admiracion"
      />
      <nav>
        <NavLink to="/" className="homelink">
          <button>Volver</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default NotFound;
