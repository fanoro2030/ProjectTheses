import { types } from '../types/types';
const initialState = {
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };
    case types.authError:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
