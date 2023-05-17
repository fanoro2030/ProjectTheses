import { types } from '../types/types';
const initialState = {
  isAuthenticated: false,
  error: null,
};
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin: {
      const token = action.payload;
      return {
        ...state,
        token,
        isAuthenticated: true,
        error: null,
      };
    }
    case types.authLogout: {
      return {};
    }

    case types.authError: {
      return { ...state, rror: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
