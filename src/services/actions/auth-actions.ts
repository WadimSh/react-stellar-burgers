import api from '../../utils/api';
import { setCookie, deleteCookie } from '../../utils/cookie';
import { TUser } from '../../types/types';
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
  UPDATE_USER_FAILED
} from '../constants';

import { AppDispatch, AppThunk } from '../types';

export interface IRegisterUser {
  readonly type: typeof REGISTER_USER;
  readonly user: TUser;
};

export interface IRegisterUserRequest {
  readonly type: typeof REGISTER_USER_REQUEST;
};

export interface IRegisterUserFailed {
  readonly type: typeof REGISTER_USER_FAILED;
};

export interface ILoginUser {
  readonly type: typeof LOGIN_USER;
  readonly user: TUser;
};

export interface ILoginUserRequest {
  readonly type: typeof LOGIN_USER_REQUEST;
};

export interface ILoginUserFailed {
  readonly type: typeof LOGIN_USER_FAILED;
};

export interface IUpdateToken {
  readonly type: typeof UPDATE_TOKEN;
  readonly user: TUser;
};

export interface IUpdateTokenRequest {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
};

export interface IUpdateTokenFailed {
  readonly type: typeof UPDATE_TOKEN_FAILED;
};

export interface ILogout {
  readonly type: typeof LOGOUT;
};

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
};

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
};

export interface IRequestPassword {
  readonly type: typeof REQUEST_PASSWORD;
};

export interface IRequestPasswordRequest {
  readonly type: typeof REQUEST_PASSWORD_REQUEST;
};

export interface IRequestPasswordFailed {
  readonly type: typeof REQUEST_PASSWORD_FAILED;
};

export interface IResetPassword {
  readonly type: typeof RESET_PASSWORD;
};

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED;
};

export interface IGetUser {
  readonly type: typeof GET_USER;
  readonly user: TUser;
};

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
};

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
};

export interface IUpdateUser {
  readonly type: typeof UPDATE_USER;
  readonly user: TUser;
};

export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
};

export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILED;
};

export type TAuthActions =
  | IRegisterUser
  | IRegisterUserRequest
  | IRegisterUserFailed
  | ILoginUser
  | ILoginUserRequest
  | ILoginUserFailed
  | IUpdateToken
  | IUpdateTokenRequest
  | IUpdateTokenFailed
  | ILogout
  | ILogoutRequest
  | ILogoutFailed
  | IRequestPassword
  | IRequestPasswordRequest
  | IRequestPasswordFailed
  | IResetPassword
  | IResetPasswordRequest
  | IResetPasswordFailed
  | IGetUser
  | IGetUserRequest
  | IGetUserFailed
  | IUpdateUser
  | IUpdateUserRequest
  | IUpdateUserFailed

export const getUser: AppThunk = () => {
  return function(dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    });
    api.getUser()
    .then((res) => {
      dispatch({
        type: GET_USER,
        user: res.user,
      });
    })
    .catch(() => {
      if (localStorage.getItem('jwt')) {
        dispatch(refreshToken());
        api.getUser()
          .then((res) => {
            dispatch({
              type: GET_USER,
              user: res.user,
            });
          })
      } else {
        dispatch({
          type: GET_USER_FAILED
        });
      }
    });
  }
};

export const updateUser:AppThunk = (name: string, email: string, password: string) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST
    });
    api.updateUser(name, email, password)
    .then((res) => {
      dispatch({
        type: UPDATE_USER,
        user: res.user,
      });
    })
    .catch(() => {
      if (localStorage.getItem('jwt')) {
        dispatch(refreshToken());
        dispatch(updateUser(name, email, password));
      } else {
        dispatch({
          type: UPDATE_USER_FAILED
        });
      }
    });
  }
};

export function requestPassword(email: string) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: REQUEST_PASSWORD_REQUEST
    });
    api.requestPassword(email)
    .then(() => {
      dispatch({
        type: REQUEST_PASSWORD
      });
    })
    .catch(() => {
      dispatch({
        type: REQUEST_PASSWORD_FAILED
      })
    });
  }
};

export function resetPassword(token: string, password: string) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    api.resetPassword(token, password)
    .then(() => {
      dispatch({
        type: RESET_PASSWORD
      });
    })
    .catch(() => {
      dispatch({
        type: RESET_PASSWORD_FAILED
      })
    });
  }
};

export function register(name: string, email: string, password: string) {
  return function(dispatch: AppDispatch) {
    dispatch({ type: REGISTER_USER_REQUEST });
    api.registerUser(name, email, password)
      .then((res) => {
        if (res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          setCookie('token', accessToken, { expires: 1200 });
          localStorage.setItem('jwt', res.refreshToken);
          dispatch({
            type: REGISTER_USER,
            user: res.user,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: REGISTER_USER_FAILED
        })
      });
  }
};

export function login(email: string, password: string) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_USER_REQUEST
    });
    api.authorization(email, password)
    .then((res) => {
      if (res.success) {
        const accessToken = res.accessToken.split("Bearer ")[1];
        setCookie('token', accessToken, { expires: 1200 });
        localStorage.setItem('jwt', res.refreshToken);
        dispatch({
          type: LOGIN_USER,
          user: res.user,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: LOGIN_USER_FAILED
      })
    });
  }
};

export function logout() {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    });
    api.logout()
    .then((res) => {
      if (res.success) {
        deleteCookie('token');
        localStorage.removeItem('jwt');
        dispatch({
          type: LOGOUT
        });
      }
    })
    .catch(() => {
      dispatch({
        type: LOGOUT_FAILED
      })
    });
  }
};

export function refreshToken() {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST
    });
    api.updateToken()
    .then((res) => {
      if (res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem('jwt', res.refreshToken);
        dispatch({
          type: UPDATE_TOKEN,
          user: res.user,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: UPDATE_TOKEN_FAILED
      })
    });
  }
}
