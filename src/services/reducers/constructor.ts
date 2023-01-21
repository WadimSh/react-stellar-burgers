import { TActions } from '../actions';
import { TIngredient, TIngredientConstructor } from '../../types/types';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  DELETE_INGREDIENT,
  CLEAN_INGREDIENT,
} from '../constants';

type TInitialState = {
  bun: TIngredient | null,
  ingredients: TIngredientConstructor[]
};

const initialState: TInitialState = {
  bun: null,
  ingredients: []
};

export const burgerReducer = (state = initialState, action: TActions) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: action.data,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.data]
      }
    }
    case MOVE_INGREDIENT: {
      const dragIngredient = [...state.ingredients];
      dragIngredient.splice(action.data.dragIndex, 0, dragIngredient.splice(action.data.hoverIndex, 1)[0]);
      return {
        ...state,
        ingredients: dragIngredient
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((item) => item.id !== action.id)
      }
    }
    case CLEAN_INGREDIENT: {
      return {
        ...state,
        ingredients: [],
        bun: null,
      }
    }
    default: {
      return state;
    }
  }
};