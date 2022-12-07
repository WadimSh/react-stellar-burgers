import api from '../../utils/api';

export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';

export const ADD_INGREDIENT_DATA = 'ADD_INGREDIENT_DATA';
export const DELETE_INGREDIENT_DATA = 'DELETE_INGREDIENT_DATA';

export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export function getIngredientsBurger() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    api.getIngredients()
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: res.data
        })
      })
      .catch(() => {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      })
  }
};

export function postOrderBurger(order) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    });
    api.postOrderDetails(order)
      .then((res) => {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          orderNumber: res.order.number
        })
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED
        })
      })
  }
};