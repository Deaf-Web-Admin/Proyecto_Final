import './About.css';

import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <div className="GlobalContainerAbout">
        <div className="About">
          <div className="Container2">
            <div className="Container1">
              <img
                src="https://tidnicli.sirv.com/about/7ZV4BkkYIkegCRk356IwQF8CqW5VKK52y.jpg"
                alt="los tres integrantes del grupo 1"
              />
            </div>
          </div>
        </div>
        <div className="Table">
          <div className="TR">
            <div className="TD">
              <h2>Amadou</h2>
            </div>
            <div className="TD">
              <p>Idea Original/Nombre/Contenido</p>
            </div>
            <div className="TD">
              <p>atdd.1992@gmail.com</p>
            </div>
            <div className="TD">
              <p>https://github.com/Adiallodiouf</p>
            </div>
          </div>
          <div className="TR">
            <div className="TD">
              <h2>Javier</h2>
            </div>
            <div className="TD">
              <p>CRUD/Mongo/Backend</p>
            </div>
            <div className="TD">
              <p>eiroa007@gmail.com</p>
            </div>
            <div className="TD">
              <p>https://github.com/eiroa007</p>
            </div>
          </div>
          <div className="TR">
            <div className="TD">
              <h2>Mauricio</h2>
            </div>
            <div className="TD">
              <p>Frontend</p>
            </div>
            <div className="TD">
              <p>linux.user@techie.com</p>
            </div>
            <div className="TD">
              <p>Github.com/Deaf-Web-Admin</p>
            </div>
          </div>
        </div>
      </div>
      <h1>InclusionPerenne@eltecnico.heliohost.us</h1>

      <nav className="BotonEnAbout">
        <NavLink to="/" className="homelink">
          <button>Volver</button>
        </NavLink>
      </nav>
    </main>
  );
};

export default About;
