import { types } from '../types/types';
import { enpoints } from '../types/endPoints';
import { credentialsSchema } from '../validations';

export const authAsync = (email, password) => {
  return async (dispatch) => {
    try {
      await credentialsSchema.validate({ email, password });

      const response = await fetch(enpoints.login.url, {
        method: enpoints.login.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('token', data.accessToken);
        dispatch(auth(data.accessToken));
      } else {
        const error = await response.json();
        dispatch(authError(error.message));
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errorMessage = error.errors[0];
        dispatch(authError(errorMessage));
      } else {
        console.error(error);
        dispatch(authError('Error al iniciar sesión'));
      }
    }
  };
};

export const authLogoutAsync = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
  };
};

export const auth = (accessToken) => {
  return {
    type: types.authLogin,
    payload: accessToken,
  };
};

export const logout = () => {
  return {
    type: types.authLogout,
    payload: null,
  };
};

export const authError = (message) => {
  return {
    type: types.authError,
    payload: message,
  };
};
