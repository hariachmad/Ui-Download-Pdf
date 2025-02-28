import React from 'react';
import { Navigate} from 'react-router-dom';
import Layout from '../pages/Layout';

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoute;