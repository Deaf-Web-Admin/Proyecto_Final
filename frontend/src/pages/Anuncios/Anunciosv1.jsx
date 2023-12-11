import './Anunciosv1.css';

import { useEffect, useState } from 'react';

import API from '../../API/API';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Anunciosv1 = () => {
  const [postList, setPostlist] = useState([]);
  const getPosts = async () => {
    const Posts = await API.get('/post');
    setPostlist(Posts.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="GlobalPostContainer">
          {postList.map((post) => (
            <div className="PostContainer" key={post._ID}>
              <h2>{post.titulo}</h2>
              <img src={post.imagen} alt={post.title} />
              <p className="Parrafo">{post.contenido}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Anunciosv1;
// <p className='Parrafo'>Por: {post.usuario}</p>
