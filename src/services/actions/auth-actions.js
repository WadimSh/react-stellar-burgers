import api from '../../utils/api';
import { setCookie, deleteCookie } from '../../utils/cookie';

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




export function getUser() {
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

export function updateUser(name, email, password) {
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

export function requestPassword(email) {
  return function(dispatch) {
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

export function resetPassword(token, password) {
  return function(dispatch) {
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

export function register(name, email, password) {
  return function(dispatch) {
    dispatch({ type: REGISTER_USER_REQUEST });
    api.registerUser(name, email, password)
      .then((res) => {
        if (res.success) {
          setCookie('token', res.accessToken, { expires: 1200 });
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

export function login(email, password) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_USER_REQUEST
    });
    api.authorization(email, password)
    .then((res) => {
      if (res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
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
  return function(dispatch) {
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
  return function(dispatch) {
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
