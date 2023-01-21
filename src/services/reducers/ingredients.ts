import { TActions } from '../actions';
import { TIngredient } from '../../types/types';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants';

type TInitialState = {
  data: Array<TIngredient>,
  isLoading: boolean,
  hasError: boolean,
};

const initialState: TInitialState = {
  data: [],
  isLoading: false,
  hasError: false,
};

export const ingredientsReducer = (state = initialState, action: TActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: action.data
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        data: []
      }
    }
    default: {
      return state;
    }
  }
};