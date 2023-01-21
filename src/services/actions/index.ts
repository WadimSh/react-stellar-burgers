import {
  IGetIngredientsRequest,
  IGetIngredientsFailed,
  IGetIngredientsSuccess,
  IAddIngredient,
  IMoveIngredient,
  IDeleteIngredient,
  ICleanIngredient,
  IAddBun,
  IGetOrderNumberSuccess,
  IGetOrderNumberRequest,
  IGetOrderNumberFailed,
  IOpenOrderModal,
  ICloseOrderModal,
} from './actions';

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