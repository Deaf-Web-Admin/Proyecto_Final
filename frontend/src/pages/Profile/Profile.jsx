import './Profile.css';

import { useContext } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/userContext';
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <main className="profile">
        <h2>{user.username}</h2>
        <img src={user.avatar} alt={user.username} />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
