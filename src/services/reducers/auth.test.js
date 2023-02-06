import { auth } from './auth';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT,
  GET_USER,
  UPDATE_USER
} from '../constants';

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual({
      user: {
        name: '',
        email: '',
      },
      isAuth: false,
    })
  })

  it('should handle REGISTER_USER', () => {
    expect(auth({}, {
      type: REGISTER_USER,
      user: {
        name: 'vadim',
        email: 'vadim@yandex.ru',
      }
    })).toEqual({
      user:{
        name: 'vadim',
        email: 'vadim@yandex.ru',
      },
      isAuth: true,
    })
  })

  it('should handle LOGIN_USER', () => {
    expect(auth({}, {
      type: LOGIN_USER,
      user: {
        name: 'vadim',
        email: 'vadim@yandex.ru',
      }
    })).toEqual({
      user:{
        name: 'vadim',
        email: 'vadim@yandex.ru',
      },
      isAuth: true,
    })
  })

  it('should handle GET_USER', () => {
    expect(auth({}, {
      type: GET_USER,
      user: {
        name: 'vadim',
        email: 'vadim@yandex.ru',
      }
    })).toEqual({
      user:{
        name: 'vadim',
        email: 'vadim@yandex.ru',
      },
      isAuth: true,
    })
  })

  it('should handle UPDATE_USER', () => {
    expect(auth({
      user: {
        name: 'vadim',
        email: 'vadim@yandex.ru',
      }}, {
      type: UPDATE_USER,
      user: {
        name: 'wadim',
        email: 'vadim@yandex.ru',
      }
    })).toEqual({
      user:{
        name: 'wadim',
        email: 'vadim@yandex.ru',
      }
    })
  })

  it('should handle LOGOUT', () => {
    expect(auth({}, {
      type: LOGOUT,
      })).toEqual({
      isAuth: false,
    })
  })
});