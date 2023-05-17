import { types } from '../types/types';
import { enpoints } from '../types/endPoints';

export const authAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(enpoints.login.url, {
        method: enpoints.login.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 401) {
        const error = await response.json();
        dispatch(authError(error.message || 'Credenciales inválidas'));
      } else if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        dispatch(auth(data.accessToken));
      } else {
        dispatch(authError('Error al iniciar sesión'));
      }
    } catch (error) {
      console.error(error);
      dispatch(authError('Error al iniciar sesión'));
    }
  };
};

export const auth = (accessToken) => {
  return {
    type: types.authLogin,
    payload: accessToken,
  };
};

export const authError = (message) => {
  return {
    type: types.authError,
    payload: message,
  };
};
