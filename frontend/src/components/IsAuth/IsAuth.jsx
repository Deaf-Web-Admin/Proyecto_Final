import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

const IsAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user !== null) {
    return children;
  } else {
    <Navigate to="/" />;
  }
};

export default IsAuth;
