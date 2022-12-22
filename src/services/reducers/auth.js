import {
  REGISTER_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILED,
  UPDATE_TOKEN,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_FAILED,
  LOGOUT,
  LOGOUT_REQUEST,
  LOGOUT_FAILED,
  REQUEST_PASSWORD,
  REQUEST_PASSWORD_REQUEST,
  REQUEST_PASSWORD_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILED,
  GET_USER,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  UPDATE_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILED,
} from '../actions/actions';

const initialState = {
  user: {
    name: '',
    email: '',
    password: ''
  },
  isRegisterRequest: false,
  isRegisterFailed: false,
  isLoginRequest: false,
  isLoginFailed: false,
  isGetUserRequest: false,
  isGetUserFailed: false,
  isUpdateUserRequest: false,
  isUpdateUserFailed: false,
  isLogoutRequest: false,
  isLogoutFailed: false,
  isPasswordRequest: false,
  isPasswordRequestFailed: false,
  isPasswordResetRequest: false,
  isPasswordResetFailed: false,
  isTokenRequest: false,
  isTokenFailed: false,
  isAuth: false,
};

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case (REGISTER_USER): {
      return {
        ...state,
        user: action.user,
        isRegisterRequest: false,
        isRegisterFailed: false,
        isAuth: true,
      };
    }
    case (REGISTER_USER_REQUEST): {
      return {
        ...state,
        isRegisterRequest: true,
        isRegisterFailed: false
      };
    }
    case (REGISTER_USER_FAILED): {
      return {
        ...state,
        isRegisterRequest: false,
        isRegisterFailed: true
      };
    }
    case (LOGIN_USER): {
      return {
        ...state,
        user: action.user,
        isLoginRequest: false,
        isLoginFailed: false,
        isAuth: true,
      };
    }
    case (LOGIN_USER_REQUEST): {
      return {
        ...state,
        isLoginRequest: true,
        isLoginFailed: false,
      };
    }
    case (LOGIN_USER_FAILED): {
      return {
        ...state,
        isLoginRequest: false,
        isLoginFailed: true,
      };
    }
    case (GET_USER): {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isGetUserRequest: false,
        isGetUserFailed: false,
      };
    }
    case (GET_USER_REQUEST): {
      return {
        ...state,
        isGetUserRequest: true,
        isGetUserFailed: false,
      };
    }
    case (GET_USER_FAILED): {
      return {
        ...state,
        isGetUserRequest: false,
        isGetUserFailed: true,
      };
    }
    case (UPDATE_USER): {
      return {
        ...state,
        user: action.user,
        isUpdateUserRequest: false,
        isUpdateUserFailed: false,
      };
    }
    case (UPDATE_USER_REQUEST): {
      return {
        ...state,
        isUpdateUserRequest: true,
        isUpdateUserFailed: false,
      };
    }
    case (UPDATE_USER_FAILED): {
      return {
        ...state,
        isUpdateUserRequest: false,
        isUpdateUserFailed: true,
      };
    }
    case (LOGOUT): {
      return {
        ...state,
        isAuth: false,
        isLogoutRequest: false,
        isLogoutFailed: false,
      };
    }
    case (LOGOUT_REQUEST): {
      return {
        ...state,
        isLogoutRequest: true,
        isLogoutFailed: false,
      };
    }
    case (LOGOUT_FAILED): {
      return {
        ...state,
        isLogoutRequest: false,
        isLogoutFailed: true,
      };
    }
    case (REQUEST_PASSWORD): {
      return {
        ...state,
        isPasswordRequest: false,
        isPasswordRequestFailed: false,
      };
    }
    case (REQUEST_PASSWORD_REQUEST): {
      return {
        ...state,
        isPasswordRequest: true,
        isPasswordRequestFailed: false,
      };
    }
    case (REQUEST_PASSWORD_FAILED): {
      return {
        ...state,
        isPasswordRequest: false,
        isPasswordRequestFailed: true,
      };
    }
    case (RESET_PASSWORD): {
      return {
        ...state,
        isPasswordRequest: false,
        isPasswordRequestFailed: false,
      };
    }
    case (RESET_PASSWORD_REQUEST): {
      return {
        ...state,
        isPasswordResetRequest: true,
        isPasswordResetFailed: false,
      };
    }
    case (RESET_PASSWORD_FAILED): {
      return {
        ...state,
        isPasswordResetRequest: false,
        isPasswordResetFailed: true,
      };
    }
    case (UPDATE_TOKEN): {
      return {
        ...state,
        isTokenRequest: false,
        isTokenFailed: false,
      };
    }
    case (UPDATE_TOKEN_REQUEST): {
      return {
        ...state,
        isTokenRequest: true,
        isTokenFailed: false,
      };
    }
    case (UPDATE_TOKEN_FAILED): {
      return {
        ...state,
        isTokenRequest: false,
        isTokenFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};