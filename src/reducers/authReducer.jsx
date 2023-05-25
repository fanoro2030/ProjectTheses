import { types } from '../types/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };
    case types.authLogout:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
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
