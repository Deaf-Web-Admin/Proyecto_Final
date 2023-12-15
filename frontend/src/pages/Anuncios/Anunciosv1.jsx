import './Anunciosv1.css';

import { useEffect, useState } from 'react';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Anunciosv1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts').then((res) => {
      setPosts(res.data);
    });
  }, []);
  const comprobacionLocalStorage = localStorage.getItem('DataW');
  return (
    <>
      <Header />
      <main>
        <div className="GlobalPostContainer">
          {posts.map((post) => (
            <div className="PostContainer" key={post._id}>
              <h2>{post.titulo}</h2>
              <img src={post.cover} alt={post.title} />
              <p className="Parrafo">{post.contenido}</p>
              {comprobacionLocalStorage !== null ? <button>Contactar</button> : <></>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Anunciosv1;
