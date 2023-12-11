import './Home.css';

import React from 'react';
import Swal from 'sweetalert2';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';

const modalmsg = () => {
  Swal.fire({
    title: 'Cookies',
    text: 'Este Sitio no usa Cookies, pero almacena informacion (encriptada) necesaria para la navegacion, la cual, al salir de manera correcta, se elimina, no obstante puede ser captada mientras se navega o si se sale de manera erronea',
    imageUrl:
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1795226/chocolate-chip-cookie-clipart-xl.png',
    imageWidth: 200,
    imageHeight: 100,
    background: '#3ba3ef',
    color: 'Black',
    confirmButtonColor: '#c34548',
    didOpen: true,
    imageAlt: 'Ilustracion de dos galletas con chispas de chocolate',
  });
};

const Home = () => {
  if (localStorage.getItem('Cookies') !== 'Si') {
    modalmsg();
    localStorage.setItem('Cookies', 'Si');
  } else {
    localStorage.setItem('Cookies', 'Si');
  }
  return (
    <>
      <Header />
      <Intro />
      <Footer />
    </>
  );
};

export default Home;
