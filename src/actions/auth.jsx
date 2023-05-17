import { types } from '../types/types';
import { enpoints } from '../types/endPoints';
export const authAsync = (email, password) => {
  return (dispatch) => {
    fetch(enpoints.login.url, {
      method: enpoints.login.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 300) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.serverResponse) {
          localStorage.setItem('token', data.serverResponse);
          dispatch(auth(data.serverResponse));
        } else {
          dispatch(error(data.message || 'Credenciales incorrectas'));
        }
      })
      .catch((error) => {
        dispatch(error('Ocurrió un error durante el inicio de sesión'));
      });
  };
};

export const auth = (token) => {
  return {
    type: types.authLogin,
    payload: token,
  };
};

export const error = (message) => {
  return {
    type: types.authError,
    payload: message,
  };
};
