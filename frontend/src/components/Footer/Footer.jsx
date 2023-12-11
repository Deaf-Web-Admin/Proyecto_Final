import './Footer.css';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink to="/About" className="homelink">
          <p>Derechos de autor © 2023 InclusionPerenne@eltecnico.heliohost.us</p>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
