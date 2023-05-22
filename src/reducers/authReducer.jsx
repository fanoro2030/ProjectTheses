import { types } from '../types/types';

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };
    case types.authLogout:
      return initialState; // Devuelve el estado inicial de autenticación
    case types.authError:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
