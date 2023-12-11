import './Header.css';

import Navigator from '../../components/Nav/Nav';
const Header = () => {
  return (
    <header>
      <img src="https://tidnicli.sirv.com/about/Logo.png" alt="logo de la fundacion" />
      <h1>Bienvenido a Inclusi&oacute;n Perenne</h1>
      <Navigator />
    </header>
  );
};

export default Header;
