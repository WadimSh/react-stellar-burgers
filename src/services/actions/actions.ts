import api from '../../utils/api';
import { TIngredient, TIngredientConstructor } from '../../types/types';
import { AppDispatch } from '../types';
import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  DELETE_INGREDIENT,
  CLEAN_INGREDIENT,
  ADD_BUN,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_FAILED,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL
} from '../constants';

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: Array<TIngredient>;
};

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly data: TIngredientConstructor;
};

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  readonly data: {
    dragIndex: number;
    hoverIndex: number;
  }
};

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
};

export interface ICleanIngredient {
  readonly type: typeof CLEAN_INGREDIENT;
};

export interface IAddBun {
  readonly type: typeof ADD_BUN;
  readonly data: TIngredient;
};

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly orderNumber: number;
};

export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
};

export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
};

export interface IOpenOrderModal {
  readonly type: typeof OPEN_ORDER_MODAL;
};

export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
};

export type TActions =
  | IGetIngredientsRequest
  | IGetIngredientsFailed
  | IGetIngredientsSuccess
  | IAddIngredient
  | IMoveIngredient
  | IDeleteIngredient
  | ICleanIngredient
  | IAddBun
  | IGetOrderNumberSuccess
  | IGetOrderNumberRequest
  | IGetOrderNumberFailed
  | IOpenOrderModal
  | ICloseOrderModal

export function getIngredientsBurger() {
  return function(dispatch: AppDispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    api.getIngredients()
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: res.data
        })
      })
      .catch(() => {
        dispatch({ type: GET_INGREDIENTS_FAILED })
      })
  }
};

export function postOrderBurger(order: Array<string>) {
  return function(dispatch: AppDispatch) {
    dispatch({ type: GET_ORDER_NUMBER_REQUEST });
    api.postOrderDetails(order)
      .then((res) => {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          orderNumber: res.order.number
        })
      })
      .catch(() => {
        dispatch({ type: GET_ORDER_NUMBER_FAILED })
      })
  }
};

