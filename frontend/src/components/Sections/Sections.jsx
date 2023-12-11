import './Sections.css';

import Secciones from './Secciones';

const Sections = () => {
  return (
    <>
      {Secciones.map((Seccion) => (
        <section key={Seccion.Title}>
          <img src={Seccion.Picture} alt={Seccion.Alt} />
          <h2>{Seccion.Title}</h2>
          <p className="Parrafo">{Seccion.Content}</p>
        </section>
      ))}
    </>
  );
};

export default Sections;
