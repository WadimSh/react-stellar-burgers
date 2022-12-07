import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA
} from '../actions/actions';

const initialState = {
  modal: false,
  ingredient: {}
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DATA: {
      return {
        ...state,
        modal: true,
        ingredient: action.ingredient
      }
    }
    case DELETE_INGREDIENT_DATA: {
      return {
        ...state,
        modal: false,
        ingredient: null
      }
    }
    default: {
      return state;
    }
  }
};