import { TActions } from '../actions';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT,
  GET_USER,
  UPDATE_USER,
} from '../constants';

type TInitialState = {
  user: {
    name: string,
    email: string,
  },
  isAuth: boolean,
};

const initialState: TInitialState = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,
};

export const auth = (state = initialState, action: TActions) => {
  switch (action.type) {
    case (REGISTER_USER): {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case (LOGIN_USER): {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case (GET_USER): {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case (UPDATE_USER): {
      return {
        ...state,
        user: action.user,
      };
    }
    case (LOGOUT): {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};