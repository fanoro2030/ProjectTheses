import React, { useEffect } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const RoutesFanor = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  const storedToken = localStorage.getItem('token');
  const isStoredToken = !!storedToken; // Verificar si hay un token almacenado

  // Comprobar si el usuario está autenticado utilizando el estado y el token almacenado
  const isUserAuthenticated = isAuthenticated || isStoredToken;

  // Redirigir al usuario a la ruta '/major' si está autenticado
  useEffect(() => {
    if (isUserAuthenticated) {
      history.replace('/major');
    }
  }, [isUserAuthenticated, history]);

  return isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default RoutesFanor;
